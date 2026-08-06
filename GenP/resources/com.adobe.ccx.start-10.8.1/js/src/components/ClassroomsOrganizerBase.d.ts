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
import type { OrganizerConfig as SharedOrganizerProps } from '@csc/classrooms/dist/src/common/providers/OrganizerConfigProvider/types';
import ClassroomsBaseWebComponent from './ClassroomsBaseComponent';
type SortBy = SharedOrganizerProps['sortBy'];
type SortDirection = SharedOrganizerProps['sortDirection'];
type ViewMode = SharedOrganizerProps['view'];
/**
 * Built off ./ProjectsOrganizerBase minus use of project-view.
 * In the future this and OrganizerConfig should be moved somewhere
 * central to be used by both projects and classrooms
 * */
export default class ClassroomsOrganizerBase extends ClassroomsBaseWebComponent {
    static get observedAttributes(): string[];
    get scrollElementId(): string | undefined;
    get view(): ViewMode | undefined;
    get sortBy(): SortBy | undefined;
    get sortDirection(): SortDirection | undefined;
    get profiles(): string | undefined;
    protected get sharedOrganizerProps(): SharedOrganizerProps;
}
export {};
//# sourceMappingURL=ClassroomsOrganizerBase.d.ts.map