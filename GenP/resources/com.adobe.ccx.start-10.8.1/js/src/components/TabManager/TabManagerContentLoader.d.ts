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
 * Loads and configures child WCs for Tab Manager content. No React.
 * Used by the pure WC implementation of cc-tab-manager.
 */
import type { AssetBrowser } from '@ccx-public/component-types';
import type { TabManagerInternalState } from './TabManagerShared';
export interface ContentLoaderOptions {
    compatibleTypes?: string[];
    allowedFileFilterTypes?: AssetBrowser.FileFilterTypeValues[];
    filterType?: 'compatible-toggle' | 'type-dropdown';
    isMobile?: boolean;
}
export declare function loadAndCreateCDO(route: string, state: TabManagerInternalState, options: ContentLoaderOptions): Promise<HTMLElement>;
export declare function loadAndCreateProjects(state: TabManagerInternalState, options: ContentLoaderOptions): Promise<HTMLElement>;
export declare function loadAndCreateLibraries(state: TabManagerInternalState, options: ContentLoaderOptions): Promise<HTMLElement>;
//# sourceMappingURL=TabManagerContentLoader.d.ts.map