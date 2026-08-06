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
 * cc-tab-manager stories: render the web component after loading the UAB SDK.
 * Default uses source; BuiltBundle story tries window.AssetBrowser then falls back to source.
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
declare function CcTabManagerStory({ useSourceFallback, mobile, }: {
    useSourceFallback?: boolean;
    /** Set to true for mobile layout (horizontal tabs at top). */
    mobile?: boolean;
}): React.JSX.Element;
declare const meta: Meta<typeof CcTabManagerStory>;
export default meta;
type Story = StoryObj<typeof CcTabManagerStory>;
/** Uses local source (no built bundle). Works without running build:web. */
export declare const Default: Story;
/**
 * Tries window.AssetBrowser (e.g. from /dist script) first; falls back to source after a few seconds if not found.
 */
export declare const BuiltBundle: Story;
/** Mobile viewport with horizontal tab bar at top. Passes mobile attribute so cc-tab-manager uses mobile layout. */
export declare const Mobile: Story;
//# sourceMappingURL=cc-tab-manager.stories.d.ts.map