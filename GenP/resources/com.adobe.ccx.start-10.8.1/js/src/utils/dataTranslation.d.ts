/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2024 Adobe
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
 * Force empty attribute value into undefined for type check.
 * @param value Value to check
 * @returns Either the value or undefined
 */
declare function getOptionalAttribute<T>(value?: T): NonNullable<T> | undefined;
/**
 * Check if a value is a string array
 * @param value Value to check
 * @returns True if the value is a string array
 */
declare function isStringArray(value: any): value is string[];
/**
 * Check if a value matches the NavigationEventDetail shape ({ name: string, params?: object }).
 */
declare function isNavigationEventDetail(value: unknown): value is {
    name: string;
    params?: Record<string, unknown>;
};
export { getOptionalAttribute, isNavigationEventDetail, isStringArray };
//# sourceMappingURL=dataTranslation.d.ts.map