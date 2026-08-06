/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
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
import type { AssetBrowser, internal_RootSDK as IRootSDK, Telemetry } from '@ccx-public/component-types';
/**
 * Normalizes routes for Sentry transaction grouping per URL parsing logic.
 *
 * - Maps routes from different host aliases to canonical forms
 * - Normalizes mount points (/your-stuff, /files) to canonical paths
 * - Normalizes UUID/URN identifiers to :assetId placeholder
 * - Maps query param based routes (tab=) to canonical paths
 * - Tag transactions with full original URL before mapping (caller responsibility)
 */
export declare function normalizeRoute(route: string): {
    normalized: string;
    wasNormalized: boolean;
};
/**
 * Checks if a route is a canonical route based on the CanonicalRoute type definition.
 */
export declare function isCanonicalRoute(route: string): boolean;
export declare function fetchWithRequestId(baseFetch: typeof fetch): typeof fetch;
export declare function fetchWithTraceParent(baseFetch: typeof fetch): typeof fetch;
export declare function fetchWithTelemetry(baseFetch: typeof fetch): typeof fetch;
export declare function getAdvancedTelemetryContext(): Promise<Telemetry.AdvancedTelemetryContext>;
export declare function dispose(): void;
export declare function initSentry(sdkOrConfig?: IRootSDK | AssetBrowser.InitOptions): Telemetry.TelemetrySDK;
//# sourceMappingURL=sentry.d.ts.map