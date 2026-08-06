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
import type Libraries from 'ace-libraries/dist/src/LibrariesWithProvider';
import LibrariesBaseWebComponent from './LibrariesBaseComponent';
import type { OrganizerMode } from 'ace-libraries/dist/src/organizerConfig';
type SharedOrganizerProps = Pick<React.ComponentProps<typeof Libraries>, 'filter' | 'view' | 'sortBy' | 'sortDirection' | 'ownershipType' | 'organizerMode' | 'orgFilter' | 'enableProgressOverlay'>;
type LibrariesFilter = SharedOrganizerProps['filter'];
type SortBy = SharedOrganizerProps['sortBy'];
type SortDirection = SharedOrganizerProps['sortDirection'];
type ViewMode = SharedOrganizerProps['view'];
type OwnershipType = SharedOrganizerProps['ownershipType'];
export default class LibrariesOrganizerBase extends LibrariesBaseWebComponent {
    static get observedAttributes(): string[];
    get filter(): LibrariesFilter | undefined;
    get view(): ViewMode | undefined;
    get sortBy(): SortBy | undefined;
    get sortDirection(): SortDirection | undefined;
    get ownershipType(): OwnershipType | undefined;
    /**
     * Legacy attribute for backward compatibility.
     * isBrandsOrganizer will be removed once Adobe Home Brands and GenStudio Brands
     * migrate to the organizerMode attribute on stage.
     */
    get isBrandsOrganizer(): boolean;
    get organizerMode(): OrganizerMode;
    get orgFilter(): string | undefined;
    get enableProgressOverlay(): boolean;
    protected get sharedOrganizerProps(): SharedOrganizerProps;
}
export {};
//# sourceMappingURL=LibrariesOrganizerBase.d.ts.map