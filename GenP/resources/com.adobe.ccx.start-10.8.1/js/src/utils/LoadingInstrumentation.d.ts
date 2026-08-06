/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2025 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
import type { internal_RootSDK as IRootSDK } from '@ccx-public/component-types';
type InstrumentationConfig = {
    enabled?: boolean;
};
declare class InstrumentationBase<TConfig extends InstrumentationConfig = InstrumentationConfig> {
    readonly instrumentationName: string;
    readonly instrumentationVersion: string;
    protected _config: TConfig;
    constructor(name: string, version?: string, config?: TConfig);
    enable(): void;
    disable(): void;
}
interface LoadingInstrumentationConfig extends InstrumentationConfig {
    selectors?: string[];
    loadingActualSpanIdleTimeoutMs?: number;
    /**
     * When false, do not emit User Timing marks/measures. Internal tracking still occurs.
     */
    emitMeasures?: boolean;
    /**
     * Limit the number of per-element measures created. Remaining elements are
     * grouped into a single aggregated measure to avoid span explosion.
     */
    perElementMeasureLimit?: number;
    /**
     * When true, keep per-element performance marks in place to aid debugging
     * in DevTools. By default, marks are cleared after measuring to bound
     * the performance entry buffer.
     */
    retainElementMarks?: boolean;
}
/**
 * Feature: Track user-visible loading durations and per-element timings
 *
 * Background:
 *   Given performance measurement is enabled in the SDK configuration
 *   And the runtime is a browser with MutationObserver and IntersectionObserver available
 *   And a combined selector list identifies loading indicators (e.g., "loading", "spinner", "progress")
 *
 * OTel Compatibility:
 *   This class follows the Instrumentation interface shape for future compatibility
 *   while maintaining a lightweight window.performance-based implementation under the hood.
 *   No external OTel runtime dependencies are required; the public surface is instrumentation-shaped.
 *
 * Preferred Loading State Marking:
 *   Use data-loading-indicator="true" for critical loading indicators (list views, asset thumbnails, etc.)
 *   This is the most robust approach as it won't get minified or refactored out.
 *   Only apply to elements where loading performance truly matters for user experience.
 *
 * Fallback Detection:
 *   CSS classes, test IDs, and ARIA attributes are detected as fallbacks
 *   but may be less reliable due to refactoring and minification.
 *
 * Authoritative idle timeout:
 *   After `loadingActualSpanIdleTimeoutMs` of inactivity, finalize regardless of any
 *   remaining started/visible elements or selector matches; in-flight elements are
 *   finalized at the same end time.
 *
 * Definitions:
 *   - "selector label": a concise string used in measure names, derived from tag, id, key classes,
 *     and attributes like role or data-testid, bounded for readability in DevTools.
 *   - "UI component": an element inside a Shadow DOM.
 *   - "loading-element-<count> [selector label]": per-element measure for loading indicators in the light DOM. Starts when an element first becomes visible in the viewport and ends when it leaves the viewport, stops matching selectors, or becomes non-visible. Each visibility cycle produces a new measure with a new sequential <count>.
 *   - "loading-ui-component-<count> [selector label]": per-element measure for loading indicators inside Shadow DOMs. Same semantics as "loading-element", attributed to UI components and contributes to the UI components aggregate.
 *   - "loading-actual": global measure spanning from the first loading indicator (element or UI component) start to the last recorded loading activity within the aggregation window. Emitted once per navigation.
 *   - "loading-ui-components": aggregate measure spanning from the first UI component start to the last UI component end.
 *   - "loading-host": host/light DOM duration from transaction (navigation) start to "loading-actual-start".
 *   - "loading-total": total duration from transaction (navigation) start to "loading-actual-end" (i.e., when the last indicator finalizes/hides).
 *   - "loading-elements [selector label] (grouped N)": grouped overflow measure emitted when the per-element limit is exceeded. One measure per selector label, spanning the minimum start to maximum end across grouped elements, with N as the count of grouped elements.
 *
 * Rule: Aggregation lifecycle
 *
 * Scenario: Start aggregation on first visible indicator
 *   Given no active loading aggregation
 *   When a matching loading indicator becomes visible in the viewport
 *   Then a start mark for that element is recorded and a unique sequential count is assigned
 *   And a global mark "loading-actual-start" is recorded at the same timestamp
 *   And the idle finalize timer is scheduled using the configured timeout
 *
 * Scenario: Measure a visible loading indicator
 *   Given an element has a start mark and later stops intersecting
 *   When the element is finalized
 *   Then an end mark is recorded
 *   And a performance measure named "loading-element-<count> [selector label]" exists
 *   And the per-element measure name includes the selector label when available
 *   And element-specific marks are cleared unless retainElementMarks is true
 *
 * Scenario: Measure repeated visibility cycles before idle timeout
 *   Given an element alternates between being visible and hidden within the aggregation window
 *   When it exits the viewport and later becomes visible again before the idle timeout fires
 *   Then each visibility cycle produces a new per-element measure with a new sequential id
 *   And the element remains enrolled for subsequent visibility cycles
 *   And the idle finalize timer is rescheduled on each cycle
 *
 * Scenario: Finalize after idle timeout
 *   Given loading aggregation has started
 *   And no element activity occurs for loadingActualSpanIdleTimeoutMs
 *   When the idle timer fires
 *   Then a mark "loading-actual-end" is recorded at the last activity time
 *   And measures "loading-actual" (actual start to actual end) and "loading-total" (total start to actual end) exist
 *   And measure "loading-host" (host/light DOM from navigation start to loading-actual-start) exists
 *   And measure "loading-ui-components" (0ms if no UI components displayed a loading state, or first UI component start to last UI component end) exists
 *   And any grouped overflow measure is emitted
 *   And currently tracked elements are finalized at the same end time
 *   And all observer Maps (activeObservers, rootIntersectionObservers, rootObservedElements, observedElements) are cleared
 *   And all IntersectionObserver and MutationObserver instances are disconnected
 *   And references to Elements and ShadowRoots are released to allow garbage collection
 *
 * Scenario: Emit global measures once per navigation
 *   Given a navigation has started and global start marks exist
 *   And a first loading window has finalized and emitted global measures
 *   When a new loading window starts without a navigation
 *   Then global measures ("loading-actual", "loading-total", "loading-host") are not re-emitted
 *
 * Rule: Overflow aggregation
 *
 * Scenario: Cap per-element measures and group overflow by selector label
 *   Given the perElementMeasureLimit is N
 *   And more than N loading elements finalize within the aggregation window
 *   When the (N+1)th or later element finalizes
 *   Then grouped overflow includes that timing keyed by its selector label with min start, max end, and count
 *   And after aggregation finalizes, one grouped measure is emitted per selector label with suffix "(grouped N)"
 *
 * Rule: DOM mutations and attributes
 *
 * Scenario: Track indicators added and removed via DOM mutations
 *   Given a MutationObserver is installed for each root (document or shadow root)
 *   When nodes matching the selectors are added
 *   Then a coalesced scan enrolls them for visibility tracking via IntersectionObserver
 *   When tracked nodes are removed (including descendants and shadow subtrees)
 *   Then those elements are finalized and detached
 *
 * Scenario: React to attribute changes affecting matching and visibility
 *   Given an element is observed for mutations
 *   When its attributes among {class, aria-hidden, aria-busy, role, data-testid, data-loading-indicator, style} change
 *   And it now matches the selectors
 *   Then it is enrolled for visibility tracking
 *   And if it was previously enrolled but never became visible and now stops matching
 *   Then a synthetic instantaneous start and end are recorded for the element only
 *   And the element is finalized
 *   And global aggregation is NOT started (synthetic instantaneous elements never became visible)
 *   And if a started element stops matching the selectors (e.g., loader class removed, aria-busy="false")
 *   Then the element is finalized immediately without waiting for intersection exit
 *   And if a started element becomes non-visible (hidden, aria-hidden, style display:none or visibility hidden/collapse)
 *   Then the element is finalized immediately without waiting for intersection exit
 *
 * Scenario: Observe data-loading-indicator and style changes
 *   Given a loading indicator toggles via data-loading-indicator or inline style
 *   When the attribute changes
 *   Then the observer enrolls or finalizes as appropriate
 *
 * Rule: Shadow DOM
 *
 * Scenario: Track loading indicators inside Shadow DOMs
 *   Given an element with a shadow root is added to the DOM
 *   When the document MutationObserver triggers a scan
 *   Then the TreeWalker discovers the shadow root via node.shadowRoot
 *   And observes that root for mutations
 *   And detects loading indicators inside it
 *   And creates per-element measures with prefix "loading-ui-component-<id>"
 *   And emits an aggregate measure "loading-ui-components" spanning all UI component timings
 *
 * Rule: Navigation reset
 *
 * Scenario: Reset on SPA navigations
 *   Given a SPA navigation occurs (history, popstate, or hashchange)
 *   When a navigation event is observed
 *   Then the current aggregation is finalized if active
 *   And all observers and tracked elements are detached for the old route
 *   And new marks "loading-total-start" and "loading-host-start" are recorded for the new route
 *   And previously created measures with the "aup-sdk:" prefix are cleared
 *   And the document is (re)observed for mutations
 *   And the document is scanned immediately and on the next animation frame to enroll new indicators
 *
 * Scenario: Do not restart within same navigation
 *   Given aggregation was finalized due to idle timeout
 *   When loading indicators appear again without a navigation
 *   Then no new per-element or grouped measures are recorded
 *   And aggregation does not restart until a navigation reset occurs
 *   And `recordingEnabled` is set to false until navigation reset
 *
 * Scenario: Coalesce back-to-back navigation signals
 *   Given navigation signals (e.g., hashchange, history.pushState/replaceState) can arrive back-to-back
 *   And a delayed pushState may occur after initial route activation (e.g., redirect following an async fetch, hidden history state)
 *   When multiple navigation signals are observed within a 300ms coalescing window
 *   Then only one navigation reset is performed for that window
 *   And if no loading indicators appear after the reset, emit one set of global measures ("loading-actual", "loading-total", "loading-host", "loading-ui-components") via the idle finalize path
 *
 * Rule: Initialization and environment
 *
 * Scenario: Teardown
 *   Given the tracker is running
 *   When teardown is invoked
 *   Then idle timers are cleared and all observers (intersection/mutation/navigation and shadow-root observation) are removed
 *   And no further marks or measures are created
 *
 * Scenario: Exit gracefully when required APIs are unavailable
 *   Given the environment lacks window/document or required observer APIs
 *   When the tracker is constructed
 *   Then it exits early without throwing (logs a warning only when window/document is missing)
 *
 * Scenario: Record initial navigation start marks
 *   Given the tracker is constructed on first page load
 *   When initialization completes
 *   Then marks "loading-total-start" and "loading-host-start" are recorded at navigation start
 *
 * Scenario: Allocate element IDs and reset on navigation
 *   Given element IDs are human-friendly and contiguous
 *   When timing starts for an element (first intersection)
 *   Then a new sequential ID is allocated without gaps
 *   And on navigation reset the ID counter is reset so the next element starts at 1
 *
 * Notes:
 * - Performance API calls are used conservatively; marks/measures are prefixed and cleared where applicable.
 * - Emission of marks/measures can be disabled via `emitMeasures` while retaining internal timing.
 * - When marks are recreated via `ensureMark`, a debug counter (`recreatedMarksCount`) is incremented and logged at debug level.
 * - Selector labels are concise and bounded for readability in DevTools.
 * - Scans are coalesced to limit thrash during bursty updates; work is deferred to the next animation frame.
 */
export declare class LoadingInstrumentation extends InstrumentationBase<LoadingInstrumentationConfig> {
    private static readonly SPAN_PREFIX;
    private static readonly MIN_FRAME_DURATION_MS;
    private readonly sdk;
    private readonly loadingActualSpanIdleTimeoutMs;
    private readonly selector;
    private readonly perElementMeasureLimit;
    private readonly retainElementMarks;
    private readonly emitMeasures;
    private elementIdCounter;
    private getNextElementId;
    private observedElements;
    private activeObservers;
    private rootIntersectionObservers;
    private rootObservedElements;
    private scheduledScanRoots;
    private loadingAggregationStarted;
    private loadingAggregationTimeout;
    private lastActivityTime;
    private perElementMeasuresCreated;
    private firstUiComponentStartTime;
    private lastUiComponentEndTime;
    private groupedOverflow;
    private firstIndividualSelectorLabel;
    private hasEmittedGlobalMeasures;
    private recordingEnabled;
    private logTimeOriginMs;
    private recreatedMarksCount;
    private navigationDebounceHandle;
    private navigationDebounceWindowMs;
    private lastNavigationHref;
    private origPushState?;
    private origReplaceState?;
    private disposed;
    constructor(sdk: IRootSDK, options?: LoadingInstrumentationConfig);
    /**
     * Force finalize loading aggregation synchronously if it has started and the measure is missing.
     * This ensures the loading-total measure exists before Sentry reads performance measures.
     * Used to prevent race conditions where Sentry's idleTimeout fires before LoadingInstrumentation's timeout.
     */
    finish(): void;
    /**
     * Manually trigger a navigation reset for environments where history events
     * are not available (e.g., UXP webviews). This should be called when
     * startUITransaction is invoked to ensure loading instrumentation tracks
     * the new navigation properly.
     *
     * @param immediate - When true (e.g. from startUITransaction), apply reset
     * immediately so loading-total and loading-host marks align with the
     * transaction start. When false, uses debouncing for history-based navigation.
     */
    resetForNavigation(immediate?: boolean): void;
    disable(): void;
    dispose(): void;
    private log;
    private debug;
    private getRootForElement;
    private isElementInsideShadow;
    private getIntersectionObserverForRoot;
    private finalizeElement;
    private buildElementSelectorLabel;
    private truncate;
    private isElementActuallyVisible;
    private unobserveAll;
    private startLoadingAggregation;
    private scheduleIdleFinalize;
    private recordLoadingActivity;
    private finalizeLoadingAggregation;
    private trackVisibility;
    private scanAndTrack;
    private observeMutations;
    private scheduleScan;
    private cleanupRoot;
    private installNavigationListeners;
    private uninstallNavigationListeners;
    private handleNavigationEvent;
    private scheduleNavigationReset;
    private resetLoadingAggregation;
    private markLoadingTotalStart;
    private markLoadingHostStart;
    private ensureMark;
    private createSpan;
    private createElementSpan;
    private createGlobalSpan;
    private releaseAllReferences;
    /**
     * Ensures a minimum duration of 1 frame (16ms) for performance measures.
     * Adjusts the end time if the duration would be less than the minimum.
     */
    private ensureMinimumDuration;
}
export {};
//# sourceMappingURL=LoadingInstrumentation.d.ts.map