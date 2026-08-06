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
import type { StoreKey } from '@csc/common/@types/IStoreKey';
import type { AssetBrowser, Env, SpectrumTheme } from '@ccx-public/component-types';
import BaseWebComponent from './BaseWebComponent';
import type { LocaleOverrides } from '@csc/common';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
import type { HostConfigCustom } from '@csc/boards/dist/src/providers/BaseProvider/types';
type BoardsShowModal = (element: React.ReactElement, options?: AssetBrowser.ModalOptions) => Promise<AssetBrowser.ShowModalResult>;
interface SharedProps extends Pick<ComponentLoaderInitOptions, 'accessToken' | 'colorScheme' | 'routes' | 'showToast' | 'spectrumScale' | 'imsData' | 'getAccessToken' | 'appId'>, Pick<HostConfigCustom, 'refreshToken'> {
    environment: Env;
    clientId: string;
    disableAnalytics?: boolean;
    locale: string;
    localeOverrides: LocaleOverrides;
    productId: string;
    appName?: string;
    appVersion?: string;
    showModal?: BoardsShowModal;
    spectrumTheme: SpectrumTheme;
    storeKey: StoreKey;
    userId: string;
}
/**
 * Built off ./ProjectsBaseWebComponent. The only difference is the clientId.
 * In the future this should be moved somewhere
 * central to be used by both projects and Boards
 * */
export default class BoardsBaseWebComponent extends BaseWebComponent {
    defaultClientId: string;
    /**
     * @param styleSheets when omitted, a default stylesheet is used.
     */
    constructor(styleSheets?: Promise<CSSStyleSheet>[]);
    static get observedAttributes(): string[];
    protected get sharedProps(): SharedProps;
}
export {};
//# sourceMappingURL=BoardsBaseComponent.d.ts.map