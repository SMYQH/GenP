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
import type { SpectrumTheme } from '@ccx-public/component-types';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
import type HostConfig from '@csc/common/@types/HostConfig';
import BaseWebComponent from './BaseWebComponent';
import type { ShowModalFn } from '@csc/common';
interface SharedProps extends Pick<ComponentLoaderInitOptions, 'accessToken' | 'appId' | 'colorScheme' | 'environment' | 'routes' | 'showToast' | 'spectrumScale' | 'imsData' | 'getAccessToken'>, Pick<HostConfig, 'refreshToken'> {
    clientId: string;
    locale: string;
    productId: string;
    appName?: string;
    appVersion?: string;
    spectrumTheme: SpectrumTheme;
    userId: string;
    isMobile: boolean;
    showModal?: ShowModalFn;
    shareSheetVersion?: string;
}
export default class LibrariesBaseWebComponent extends BaseWebComponent {
    defaultClientId: string;
    /**
     * @param styleSheets when omitted, a default stylesheet is used.
     */
    constructor(styleSheets?: Promise<CSSStyleSheet>[]);
    static get observedAttributes(): string[];
    protected get sharedProps(): SharedProps;
}
export {};
//# sourceMappingURL=LibrariesBaseComponent.d.ts.map