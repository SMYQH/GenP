/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2026 Adobe
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
import type { AssetBrowser, internal_RootSDK as IRootSDK, Profile } from '@ccx-public/component-types';
/**
 * Type guard to check if config is an SDK instance.
 */
export declare function isSDK(config: IRootSDK | AssetBrowser.InitOptions): config is IRootSDK;
/**
 * Fetches the IMS profile using ProfileService (imslib).
 */
export declare function fetchImsProfile(accessToken: string, clientId: string, environment?: string): Promise<Profile | undefined>;
/**
 * Lazily fetches isConsolidatedAccount from IMS and patches it into SharedConfig.imsData.
 * No-ops if the field is already present or if required config is missing.
 * Call fire-and-forget (do not await) during init.
 * TODO: [CCPROJ-14668] Remove once all hosts provide the field.
 */
export declare function loadConsolidatedAccount(accessToken: string, clientId: string, environment?: string): Promise<void>;
//# sourceMappingURL=sdk.d.ts.map