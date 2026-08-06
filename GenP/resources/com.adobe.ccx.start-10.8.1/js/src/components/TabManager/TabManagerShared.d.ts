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
/**
 * Shared types and config for Tab Manager. No React dependencies.
 * Used by the pure WC implementation of cc-tab-manager.
 */
import type { AssetBrowser } from '@ccx-public/component-types';
import { CDO_ROUTES } from '../../constants/routes';
export { CDO_ROUTES };
export type TabId = 'files' | 'shared-with-you' | 'projects' | 'recent' | 'libraries' | 'favorites' | 'generation-history' | 'review-links' | 'deleted';
export interface BuiltInTabConfig {
    id: TabId;
    labelId: string;
    defaultLabel: string;
    iconName: string;
}
export declare const BUILT_IN_TAB_CONFIGS: Record<TabId, BuiltInTabConfig>;
export type ViewOptions = AssetBrowser.ViewOptions;
export interface TabManagerState {
    tab: string;
    assetId?: string;
    viewOptions: ViewOptions;
}
/** Internal state held by the tab manager (WC or React). */
export interface TabManagerInternalState {
    currentTab: string;
    currentAssetId: string | undefined;
    currentViewOptions: ViewOptions;
    routeId: string;
    projectId: string | undefined;
    projectAssetId: string | undefined;
}
export declare const DEFAULT_VIEW_OPTIONS: ViewOptions;
export declare const TAB_ID_TO_CONTENT_VIEW_TYPE: Partial<Record<TabId, AssetBrowser.ContentViewType>>;
/** Map ContentViewType (from navigate events) to TabId */
export declare const CONTENT_VIEW_TO_TAB: Record<string, string>;
export declare const ALL_TAB_IDS: readonly string[];
/** Custom tab config supplied by the host via the custom-tabs attribute. */
export interface CustomTabConfigInput {
    id: string;
    label: string;
}
/** Resolved tab config for display (built-in or custom). */
export interface VisibleTabConfig {
    id: string;
    label: string;
}
/** Returns true if the id is a built-in tab id. Custom tab ids must not conflict with these. */
export declare function isBuiltInTabId(id: string): id is TabId;
export type NavigateEventDetail = AssetBrowser.NavigationEventDetail & {
    __fromWebComponent?: boolean;
};
/**
 * Given a navigate event detail and current internal state, compute the new state.
 * No side effects. Used by the WC (and by the React hook via a small adapter).
 */
export declare function applyNavigationEvent(detail: NavigateEventDetail, state: TabManagerInternalState): TabManagerInternalState;
export declare const TAB_ID_TO_CDO_ROUTE: Partial<Record<TabId, string>>;
//# sourceMappingURL=TabManagerShared.d.ts.map