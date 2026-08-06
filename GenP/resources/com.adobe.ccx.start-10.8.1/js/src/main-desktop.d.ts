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
declare const telemetrySDK: import("@ccx-public/component-types/dist/Telemetry").TelemetrySDK;
import './utils/matchMediaPolyfill';
import versions from './componentVersions';
import * as Internal from './internal';
export { Internal };
export { AdobeAssetGridItem as GridItem, navigateToAssetLocation } from '@csc/adobe-assets-view';
export { SAMProvider, ProjectContextProvider, useProjectContextLoader, useProjectContext, } from '@csc/sam-utils';
export { HostConfigProvider } from '@csc/common';
export { importMessages } from '@csc/adobe-assets-view/dist/src/i18n';
export declare const initialize: (stores: import("./interfaces/ccd").CCDStore, resourcePath: string) => Promise<void>;
export declare const components: {
    id: string;
    type: "react" | "webComponent";
    getName(): string;
    getIcon(): string;
    route: string;
    main: any;
}[];
export { versions };
export { telemetrySDK };
export { UAP, UXP_MIN_DIALOG_WIDTH, UXP_MIN_DIALOG_HEIGHT, UXP_INITIAL_DIALOG_WIDTH, UXP_INITIAL_DIALOG_HEIGHT, type IUXPModalDialogOptions, PickerMode, } from '@ccx/ccx-document-picker';
export { Themes, type IHostProductData, CardSize, CDOProvider, CDOContentViewType, type ICallbacks, type IIMSData, Utils, Busy, GridView, ListView, ListItem, type IListViewCustomColumn, ViewMode, ModeType, ColumnType, UXSortBy, UXSortDir, I18N, deriveParentPath, type ListViewColumn, DateMetadata, ROOT_FOLDER_PATH, normalizePath, } from '@ccx/ccx-cdo';
export { hasOnlyOne, hasAnyLocalItemsToBeSynced, NavigationEvent } from '@csc/common';
export { COMMON_CARD_SIZES } from '@csc/collection-view';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
export { type ComponentLoaderInitOptions };
//# sourceMappingURL=main-desktop.d.ts.map