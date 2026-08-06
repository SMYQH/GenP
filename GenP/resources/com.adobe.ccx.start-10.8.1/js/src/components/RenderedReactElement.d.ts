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
import type React from 'react';
import BaseWebComponent from './BaseWebComponent';
/**
 * Convert a ReactElement to a Web Component (HTMLElement) instance.
 * Useful to allow our React components to be rendered inside a Web Component
 * without needing to define a named web component class.
 */
export declare function createElementFromReact(children: React.ReactElement<unknown>): BaseWebComponent;
//# sourceMappingURL=RenderedReactElement.d.ts.map