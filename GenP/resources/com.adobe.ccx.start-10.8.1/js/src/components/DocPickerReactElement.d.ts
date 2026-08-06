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
import type { IPickerInfo, IUAPCallbacks } from '@ccx/ccx-document-picker';
import type { IHostProductData, IIMSData } from '@ccx/ccx-cdo';
interface Props {
    pickerInfo: IPickerInfo;
    cdoHostProductData: IHostProductData;
    cdoIMSData: IIMSData;
    callbacks?: IUAPCallbacks;
    onExecutePickerAction: (actionState: unknown) => void;
    theme: string;
}
export default class DocPickerReactElement extends Component<Props> {
    constructor(props: Props);
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=DocPickerReactElement.d.ts.map