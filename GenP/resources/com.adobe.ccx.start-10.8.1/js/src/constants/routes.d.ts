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
 * CDO route constants used across components
 */
export declare const CDO_ROUTES: {
    readonly CLOUD_DOCS: "cloud-docs";
    readonly SHARED_WITH_YOU: "shared-with-you";
    readonly DELETED: "deleted";
    readonly RECENTS: "recents";
    readonly FAVORITES: "favorites";
    readonly GENERATION_HISTORY: "generation-history";
    readonly REVIEW_LINKS: "review-links";
    readonly FF_BOARDS: "ff-boards";
    readonly MOBILE_CREATIONS: "mobile-creations";
};
export type CDORoute = (typeof CDO_ROUTES)[keyof typeof CDO_ROUTES];
/**
 * Attribute names used in web components
 */
export declare const ATTRIBUTE_NAMES: {
    readonly ROUTE: "route";
    readonly ROUTE_ID: "route-id";
    readonly ROUTE_TO_PARENT: "route-to-parent";
    readonly SORT_BY: "sort-by";
    readonly SORT_DIRECTION: "sort-direction";
    readonly VIEW: "view";
    readonly FILTER: "filter";
    readonly COMPATIBLE_TYPES: "compatible-types";
    readonly ALLOWED_FILE_FILTER_TYPES: "allowed-file-filter-types";
    readonly FILTER_TYPE: "filter-type";
    readonly ROUTING_REFRESH_TIMESTAMP: "routing-refresh-timestamp";
    readonly ENABLE_OPERATION_MONITOR: "enable-operation-monitor";
    readonly MOBILE: "mobile";
};
//# sourceMappingURL=routes.d.ts.map