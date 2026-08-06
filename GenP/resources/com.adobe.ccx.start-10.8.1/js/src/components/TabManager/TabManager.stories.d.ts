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
/**
 * Tab Manager stories use the UAB SDK and render <cc-tab-manager> (web component),
 * matching how consumers integrate UAB. The local package is used so no built bundle
 * is required for development.
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
interface CcTabManagerStoryProps {
    tabs: string[];
    defaultTab?: string;
    /** When set, hides the tab strip and shows only this tab's content. */
    singleTab?: string;
    /** Set to true for mobile layout (horizontal tabs at top). */
    mobile?: boolean;
}
declare function CcTabManagerStory({ tabs, defaultTab, singleTab, mobile }: CcTabManagerStoryProps): React.JSX.Element;
declare const meta: Meta<typeof CcTabManagerStory>;
export default meta;
type Story = StoryObj<typeof CcTabManagerStory>;
/** Use the Controls panel to change tabs (add/remove/reorder), defaultTab, and singleTab. */
export declare const Playground: Story;
/** All available built-in tabs (Files, Shared with you, Projects, Recent, Libraries, Favorites, Generation history, Review links, Deleted). */
export declare const AllTabs: Story;
/** Core tabs only: Files, Shared with you, Projects, Deleted. */
export declare const CoreTabs: Story;
/** Start on Projects tab. */
export declare const StartWithProjects: Story;
/** Favorites and Generation history. */
export declare const WithFavoritesAndHistory: Story;
/** Single-tab mode – tab strip hidden, only one tab's content (e.g. Files) is shown. */
export declare const SingleTab: Story;
/** Mobile viewport – horizontal tab bar at top. Passes mobile attribute so cc-tab-manager uses mobile layout. */
export declare const MobileView: Story;
/** Custom tab via slot: Files, a placeholder "On This Computer" custom tab, then Deleted. */
export declare const WithCustomTab: Story;
//# sourceMappingURL=TabManager.stories.d.ts.map