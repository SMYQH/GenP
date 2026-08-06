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
export declare class PerformanceAPIMock {
    private markSpy;
    private measureSpy;
    private getEntriesByNameSpy;
    private clearMeasuresSpy;
    private createdMarks;
    private createdMeasures;
    private timeOrigin;
    constructor();
    private setupPerformanceAPI;
    getMarkSpy(): jest.Mock<void, [string, PerformanceMarkOptions?]>;
    getMeasureSpy(): jest.Mock<void, [string, string?, string?]>;
    getGetEntriesByNameSpy(): jest.Mock<PerformanceEntryList, [string, string?]>;
    getClearMeasuresSpy(): jest.Mock<void, [string?]>;
    cleanup(): void;
}
//# sourceMappingURL=PerformanceAPIMock.d.ts.map