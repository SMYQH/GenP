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
import React, { Component } from 'react';
import type { SAM } from '@ccx-public/component-types';
import type { IAnalyticsData, ICallbacks, IHostProductData, IIMSData, Themes } from '@ccx/ccx-cdo';
import { AssetBrowser } from '@ccx-public/component-types';
import type ComponentLoaderInitOptions from '@csc/common/@types/ComponentLoaderInitOptions';
interface viewProps {
    routeId?: string;
    routeToParent?: boolean;
}
type Props = React.PropsWithChildren<{
    sharedConfig: ComponentLoaderInitOptions;
    hostProductData: IHostProductData;
    imsData: IIMSData;
    currentView?: AssetBrowser.ContentViewType;
    contentViewProps?: viewProps;
    analyticsData?: IAnalyticsData;
    callbacks?: ICallbacks;
    messages?: {
        [id: string]: string;
    };
    theme?: Themes;
    disableNativeControls?: boolean;
    __assetContext_forTestingOnly?: SAM.AssetContext;
}>;
export default class CDOReactComponent extends Component<Props> {
    private renderCDOContentView;
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=CDOReactComponent.d.ts.map