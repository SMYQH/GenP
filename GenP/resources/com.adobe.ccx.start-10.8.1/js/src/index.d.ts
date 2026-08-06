/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Adobe
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
import type { AssetBrowser, internal_RootSDK as IRootSDK } from '@ccx-public/component-types';
/**
 * Load UI components and their dependencies.
 * Accepts one or more component tag names; dependencies are resolved and all requested
 * components (plus any dependencies) are loaded in parallel.
 *
 * @example
 * // Host only loads Tab Manager; Tab Manager loads cc-asset-organizer when a CDO tab is shown
 * await sdk.loadUIComponent('cc-tab-manager');
 *
 * @example
 * // Load multiple components
 * await sdk.loadUIComponent('cc-tab-manager', 'cc-document-picker');
 */
declare function loadUIComponent(...tagNames: string[]): Promise<void>;
declare const _default: {
    /**
     * Universal Asset Browser (UAB) Initialization.
     * This should eventually expose CDO, UAP, and other Spaces interfaces as well.
     */
    init: (sdkOrConfig: IRootSDK | AssetBrowser.InitOptions) => Promise<{
        loadUIComponent: typeof loadUIComponent;
        registerDSN(pattern: RegExp | string, dsn: string, options?: {
            name?: string;
            version?: string;
        }): void;
        startUITransaction(route: import("@ccx-public/component-types/dist/Telemetry").CanonicalRoute & string): void;
        startUITransaction(route: string): void;
        startNestedUITransaction(nestedUIState: Record<string, unknown>): void;
        getAdvancedTelemetryContext(): import("@ccx-public/component-types/dist/Telemetry").AdvancedTelemetryContext;
    } | {
        loadUIComponent: typeof loadUIComponent;
        updateConfig: (newConfig: AssetBrowser.InitOptions) => void;
        registerDSN(pattern: RegExp | string, dsn: string, options?: {
            name?: string;
            version?: string;
        }): void;
        startUITransaction(route: import("@ccx-public/component-types/dist/Telemetry").CanonicalRoute & string): void;
        startUITransaction(route: string): void;
        startNestedUITransaction(nestedUIState: Record<string, unknown>): void;
        getAdvancedTelemetryContext(): import("@ccx-public/component-types/dist/Telemetry").AdvancedTelemetryContext;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map