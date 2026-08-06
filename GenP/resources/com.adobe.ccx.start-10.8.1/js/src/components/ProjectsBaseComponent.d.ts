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
import type { StoreKey } from '@csc/common/@types/IStoreKey';
import type { AssetBrowser, SAM } from '@ccx-public/component-types';
import BaseWebComponent from './BaseWebComponent';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
import type BackedCollectionItem from '@csc/adobe-assets-view/dist/src/types/BackedCollectionItem';
interface SharedProps extends Pick<ComponentLoaderInitOptions, 'adminModeOrgId'> {
    storeKey: StoreKey;
    isMobile: boolean;
    documentCallbacks?: AssetBrowser.DocumentCallbacks;
    shouldRenderItemAsDisabled?: (item: BackedCollectionItem<SAM.AdobeAsset>) => Promise<boolean>;
}
export default class ProjectsBaseWebComponent extends BaseWebComponent {
    private _documentCallbacks;
    private _shouldRenderItemAsDisabled?;
    defaultClientId: string;
    /**
     * @param styleSheets when omitted, a default stylesheet is used.
     */
    constructor(styleSheets?: Promise<CSSStyleSheet>[]);
    static get observedAttributes(): string[];
    set callbacks(callbackApis: AssetBrowser.DocumentCallbacks);
    get callbacks(): AssetBrowser.DocumentCallbacks;
    /**
     * Sets a callback function to determine if an item in a Projects Organizer should be rendered as disabled.
     * Currently this is only supported for Projects Organizer but could be extended to Project Contents
     *
     * @param callback - A function that receives a SAM.AdobeAsset and returns a Promise<boolean>.
     *                   Return true to disable the item, false to keep it enabled.
     */
    set shouldRenderItemAsDisabled(callback: ((item: SAM.AdobeAsset) => Promise<boolean>) | undefined);
    get shouldRenderItemAsDisabled(): ((item: BackedCollectionItem<SAM.AdobeAsset>) => Promise<boolean>) | undefined;
    protected get sharedProps(): SharedProps;
}
export {};
//# sourceMappingURL=ProjectsBaseComponent.d.ts.map