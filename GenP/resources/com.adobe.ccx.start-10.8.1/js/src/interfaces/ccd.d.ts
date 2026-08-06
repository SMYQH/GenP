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
export interface CCDStore {
    get(storeId: string): any;
    observer(storeId: string, propertyName: string, interceptor: (value: any) => void): any;
    registerStore(storeId: string, storeObj: any): any;
}
export interface CCDMainInterface {
    initialize(stores: CCDStore, resourcePath: string): Promise<void>;
    components: Array<{
        id: string;
        type: 'react' | 'webComponent';
        getName(): string;
        getIcon(): string;
        route: string;
        main: any;
    }>;
}
//# sourceMappingURL=ccd.d.ts.map