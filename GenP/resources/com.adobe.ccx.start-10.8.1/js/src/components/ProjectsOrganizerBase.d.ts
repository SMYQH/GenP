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
import type Organizer from 'ace-projects/dist/src/ProjectsOrganizer';
import ProjectsBaseWebComponent from './ProjectsBaseComponent';
type SharedOrganizerProps = Pick<React.ComponentProps<typeof Organizer>, 'view' | 'sortBy' | 'sortDirection' | 'projectView' | 'hideProjectActions' | 'hideProjectMetadata' | 'enableSearch' | 'searchQuery' | 'singleSelectionMode' | 'shouldRenderItemAsDisabled'>;
type ProjectsOrganizerViewFilter = SharedOrganizerProps['projectView'];
type SortBy = SharedOrganizerProps['sortBy'];
type SortDirection = SharedOrganizerProps['sortDirection'];
type ViewMode = SharedOrganizerProps['view'];
export default class ProjectsOrganizerBase extends ProjectsBaseWebComponent {
    static get observedAttributes(): string[];
    get view(): ViewMode | undefined;
    get sortBy(): SortBy | undefined;
    get sortDirection(): SortDirection | undefined;
    get projectView(): ProjectsOrganizerViewFilter | undefined;
    get hideProjectActions(): boolean;
    get hideProjectMetadata(): boolean;
    get searchQuery(): string | undefined;
    get enableSearch(): boolean;
    get singleSelectionMode(): boolean;
    protected get sharedOrganizerProps(): SharedOrganizerProps;
}
export {};
//# sourceMappingURL=ProjectsOrganizerBase.d.ts.map