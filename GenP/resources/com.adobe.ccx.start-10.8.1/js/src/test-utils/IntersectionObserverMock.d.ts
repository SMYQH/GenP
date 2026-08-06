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
export interface MockIntersectionObserverEntry {
    target: Element;
    isIntersecting: boolean;
}
export declare class MockIntersectionObserver implements Partial<IntersectionObserver> {
    private readonly callback;
    observe: jest.MockedFunction<IntersectionObserver['observe']>;
    unobserve: jest.MockedFunction<IntersectionObserver['unobserve']>;
    disconnect: jest.MockedFunction<IntersectionObserver['disconnect']>;
    constructor(callback: IntersectionObserverCallback);
    trigger(entries: MockIntersectionObserverEntry[]): void;
}
export declare class IntersectionObserverMock {
    private instances;
    setup(): {
        instances: MockIntersectionObserver[];
    };
}
export declare function getObserverForElement(element: Element): MockIntersectionObserver | undefined;
//# sourceMappingURL=IntersectionObserverMock.d.ts.map