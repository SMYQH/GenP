/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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
import type { Env, SpectrumTheme } from '@ccx-public/component-types';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
import type HostConfig from '@csc/common/@types/HostConfig';
import BaseWebComponent from './BaseWebComponent';
import type { ShowModalFn } from '@csc/common';
declare enum AssetPreviewType {
    LibraryElement = "libraryElement",
    CloudDoc = "cloudDoc",
    CloudDocRequestAccess = "cloudDocRequestAccess"
}
export type LibraryElementAssetData = {
    assetId: string;
    elementId: string;
    elementIds?: string[];
    orgId?: string;
    type: AssetPreviewType.LibraryElement;
    isPublic?: boolean;
};
export type CloudDocAssetData = {
    assetId: string;
    type: AssetPreviewType.CloudDoc;
    showOpenInApp?: boolean;
    isPublic?: boolean;
};
export type CloudDocRequestAccessData = {
    assetId: string;
    type: AssetPreviewType.CloudDocRequestAccess;
};
declare enum HeaderActions {
    OPEN_IN_APP = "openInApp",
    SHARE = "share",
    COPY_TO_FILES = "copyToFiles",
    DOWNLOAD = "download"
}
declare enum SideBarButtons {
    REPORT_ABUSE = "reportAbuse"
}
declare enum SideBarPanelId {
    METADATA = "metadata",
    TIMELINE = "versions"
}
export type AssetPreviewFeatureSet = {
    disabledHeaderActions?: HeaderActions[];
    disabledSideBarButtons?: SideBarButtons[];
    useUpdatedAssetPreviewVersion?: boolean;
    useBrandsElementMetadata?: boolean;
    sidebarPanelTakeover?: SideBarPanelId;
};
declare enum AssetPreviewFeatureSets {
    GenStudioBrands = "genstudio-brands",
    Updated = "updated",
    Default = "default"
}
interface SharedProps extends Pick<ComponentLoaderInitOptions, 'accessToken' | 'appId' | 'colorScheme' | 'showToast' | 'spectrumScale' | 'imsData' | 'getAccessToken'>, Pick<HostConfig, 'refreshToken'> {
    clientId: string;
    locale: string;
    productId: string;
    appName?: string;
    appVersion?: string;
    environment: Env;
    spectrumTheme: SpectrumTheme;
    userId: string;
    isMobile: boolean;
    assetData: LibraryElementAssetData | CloudDocAssetData | CloudDocRequestAccessData;
    showModal?: ShowModalFn;
    shareSheetVersion?: string;
    assetPreviewFeatureSet: AssetPreviewFeatureSet;
    isOpenReportAbuse?: boolean;
}
export default class AssetPreviewBase extends BaseWebComponent {
    defaultClientId: string;
    protected getShadowRootOptions(): ShadowRootInit;
    /**
     * @param styleSheets when omitted, a default stylesheet is used.
     */
    constructor(styleSheets?: Promise<CSSStyleSheet>[]);
    connectedCallback(): void;
    static get observedAttributes(): string[];
    protected get assetId(): string;
    protected get showOpenInApp(): boolean | undefined;
    protected get featureSet(): AssetPreviewFeatureSets;
    protected get assetPreviewFeatureSet(): AssetPreviewFeatureSet;
    protected get elementId(): string;
    protected get elementIds(): string[];
    protected get repositoryId(): string;
    protected get isPublicAsset(): boolean;
    protected get isOpenReportAbuse(): boolean;
    protected get type(): AssetPreviewType;
    protected get assetData(): LibraryElementAssetData | CloudDocAssetData | CloudDocRequestAccessData;
    protected get sharedProps(): SharedProps;
}
export {};
//# sourceMappingURL=AssetPreviewBase.d.ts.map