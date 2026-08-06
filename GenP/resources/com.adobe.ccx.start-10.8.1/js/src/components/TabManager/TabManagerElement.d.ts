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
export declare class TabManagerElement extends HTMLElement {
    private state;
    private contentEl;
    private navEl;
    private styleSheetPromise;
    private navigateAbort;
    private openAbort;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    private syncStateFromAttributes;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, newVal: string | null): void;
    /** Tab ids in order (built-in and custom). */
    private get tabIds();
    private get customTabsConfig();
    private get defaultTab();
    /** When set, nav is hidden and only this tab's content is shown. */
    private get singleTab();
    private get messages();
    private get isMobile();
    private get compatibleTypes();
    private get allowedFileFilterTypes();
    private get filterType();
    /** Resolved tab configs for nav (built-in + custom). Custom labels from custom-tabs or slot tab-label. */
    private getVisibleTabConfigs;
    /** Get label for a custom tab from the slotted element's tab-label attribute. */
    private getCustomTabLabelFromSlot;
    private render;
    private attachEventListeners;
    private handleTabClick;
    private handleNavigate;
    private dispatchStateChange;
    private updateTabSelection;
    private renderContent;
    /** Show slotted content for a custom tab and pass context to the slotted element. */
    private renderCustomTabContent;
    /** Set view context and callbacks on a custom tab's slotted element (for TabRenderContext contract). */
    private applyTabContextToElement;
}
export declare function registerTabManagerElement(): void;
//# sourceMappingURL=TabManagerElement.d.ts.map