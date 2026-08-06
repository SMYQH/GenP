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
import type { ManageAssignmentButtonCommonProps } from '@csc/classrooms/dist/src/ManageAssignmentButton/types';
import ClassroomsBaseWebComponent from './ClassroomsBaseComponent';
/**
 * Base button component for ManageAssignment-related buttons
 * */
export default class ManageAssignmentButtonBase extends ClassroomsBaseWebComponent {
    static get observedAttributes(): string[];
    get assignmentCode(): string | undefined;
    get assignmentId(): string | undefined;
    get classroomId(): string | undefined;
    get hideAssetPicker(): boolean;
    get quiet(): boolean;
    protected get sharedManageAssignmentButtonProps(): Pick<ManageAssignmentButtonCommonProps, 'assignmentCode' | 'assignmentId' | 'classroomId' | 'hideAssetPicker' | 'quiet'>;
}
//# sourceMappingURL=ManageAssignmentButtonBase.d.ts.map