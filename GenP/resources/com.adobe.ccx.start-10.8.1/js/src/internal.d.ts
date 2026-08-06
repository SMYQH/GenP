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
import type { IAnalyticsData, IImportData, IOnAnalyticsEvent, NotificationStatus, Tile } from '@ccx/ccx-cdo';
import { AssetSyncStateStore, CDOLocalStorage, Capability, CloudDocuments, CloudSyncStatus, CloudSyncType, Deleted, INGEST_DEBOUNCE_VALUE, INGEST_MAX_QUEUED_EVENTS, INGEST_PROJECT_VALUE, LogLevel, Metrics, SAMLogLevel, SelectionStore, SharedWithYou, TileStatus, getCDCGlobalStore, getExistingCDCGlobalStore, platformOsVersion, sleep, version, waitForExistingCDCGlobalStore } from '@ccx/ccx-cdo';
import type { IPickerActionState, IPickerInfo, IUAPCallbacks, IUXPModalDialogOptions } from '@ccx/ccx-document-picker';
import { App, I18NCDP, PickerMode, UAP, UXP_INITIAL_DIALOG_HEIGHT, UXP_INITIAL_DIALOG_WIDTH, UXP_MIN_DIALOG_HEIGHT, UXP_MIN_DIALOG_WIDTH } from '@ccx/ccx-document-picker';
export { UAP, App, type IUAPCallbacks, type IPickerActionState, type IPickerInfo, UXP_INITIAL_DIALOG_HEIGHT, UXP_INITIAL_DIALOG_WIDTH, UXP_MIN_DIALOG_HEIGHT, UXP_MIN_DIALOG_WIDTH, type IUXPModalDialogOptions, PickerMode, I18NCDP, TileStatus, type IImportData, LogLevel, platformOsVersion, SAMLogLevel, INGEST_DEBOUNCE_VALUE, INGEST_MAX_QUEUED_EVENTS, INGEST_PROJECT_VALUE, Metrics, version, sleep, type IAnalyticsData, type IOnAnalyticsEvent, CDOLocalStorage, type NotificationStatus, getCDCGlobalStore, getExistingCDCGlobalStore, waitForExistingCDCGlobalStore, CloudSyncStatus, CloudSyncType, type Tile, CloudDocuments, SharedWithYou, Deleted, AssetSyncStateStore, Capability, SelectionStore, };
//# sourceMappingURL=internal.d.ts.map