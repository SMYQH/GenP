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
import type { ICallbacks, ISelectionUXConfig } from '@ccx/ccx-cdo';
import type { PickerMode } from '@csc/common';
import { AssetBrowser } from '@ccx-public/component-types';
import type { SAM } from '@ccx-public/component-types';
import type { IPickerInfo } from '@ccx/ccx-document-picker';
export declare function getLaunchUAP(): ({ callbacks, elements, featureFlags, getDisabledTooltipLabel, isViewEnabled, initialView, shouldRenderItemAsDisabled, mode, selectionUXConfig, useDeprecatedShowModalAPI, compatibleTypes, excludeMediaTypes, mediaTypes, isMobile, pickerType, }: {
    callbacks?: ICallbacks;
    compatibleTypes?: string[];
    elements: SAM.AdobeAsset[];
    excludeMediaTypes?: string[];
    featureFlags?: Record<string, boolean>;
    getDisabledTooltipLabel?: () => string;
    isViewEnabled?: (view: AssetBrowser.NavigationEventDetail) => boolean;
    initialView?: AssetBrowser.NavigationEventDetail;
    shouldRenderItemAsDisabled?: (element: any) => Promise<boolean>;
    mediaTypes?: string[];
    mode: PickerMode;
    selectionUXConfig?: ISelectionUXConfig;
    useDeprecatedShowModalAPI?: boolean;
    isMobile?: boolean;
    pickerType?: IPickerInfo["pickerType"];
}) => Promise<any>;
export default function registerDocPickerElement(tagName?: string): void;
//# sourceMappingURL=DocPickerElement.d.ts.map