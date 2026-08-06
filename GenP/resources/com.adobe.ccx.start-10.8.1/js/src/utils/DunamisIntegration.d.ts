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
import type { IAUPSDK } from '@ccx-public/component-types';
import type { Client, Event, EventHint, Integration } from '@sentry/core';
/**
 * Sentry Integration that forwards telemetry events to Dunamis via the Dunamis SDK.
 *
 * This integration hooks into Sentry's event processing pipeline and sends
 * a copy of each event to Dunamis using the @dunamis/dunamis-sdk with its own
 * apiKey and project configuration. Events are forwarded immediately as the SDK handles batching.
 */
export declare class DunamisIntegration implements Integration {
    name: string;
    private sdk;
    private logger;
    private ingestInstance;
    private configGuid;
    private dunamisEnvironment;
    /**
     * Initialize the Dunamis Integration with SDK instance and optional Ingest configuration.
     *
     * @param sdk SDK instance for accessing config
     * @param options Optional configuration for Ingest
     * @param options.project Project name for Dunamis
     * @param options.environment Sentry environment ('production' | 'staging' | 'preview' | 'development')
     * @param options.abortSignal AbortSignal for cleanup lifecycle management
     */
    constructor(sdk: IAUPSDK, options?: {
        project?: string;
        environment?: string;
        abortSignal?: AbortSignal;
    });
    /**
     * Initialize the Dunamis SDK with the provided configuration.
     */
    private initializeDunamis;
    /**
     * Sentry v10+ integration hook - called for each event
     * Processes events and forwards them to Dunamis asynchronously
     * CRITICAL: Always returns the event unchanged so Sentry.io continues normally
     *
     * @param event The Sentry event to process
     * @param _hint Event hint containing additional context (unused)
     * @param _client The Sentry client instance (unused)
     * @returns The event to allow Sentry to continue processing
     */
    processEvent(event: Event, _hint: EventHint, _client: Client): Event | null;
    /**
     * Process a Sentry event and forward it to Dunamis via the Dunamis SDK.
     * This method is called for every event that Sentry processes (exceptions and transactions).
     * Events are forwarded immediately as the SDK handles its own batching logic.
     *
     * @param sentryEvent The event from Sentry
     */
    private sendEventToDunamis;
    /**
     * Infer the event category from Sentry event data.
     * Maps Sentry platform/context data to Dunamis category values.
     *
     * @param sentryEvent Event from Sentry
     * @param allTags Collected tags from event and scope
     * @returns Category value: 'DESKTOP', 'WEB' or 'MOBILE'
     */
    private inferCategory;
    /**
     * Transform Sentry event format to Dunamis SDK event format.
     * This method extracts all relevant data from the Sentry event and
     * structures it according to Dunamis SDK submitEvent requirements.
     *
     * @param sentryEvent Event from Sentry (exception or transaction)
     * @returns Transformed JSON object for Dunamis SDK submitEvent
     */
    private transformToDunamisEvent;
    /**
     * Cleanup method - stops the ingest instance.
     * Called automatically when abortSignal fires, or can be called manually.
     *
     * Note: This method handles async cleanup internally to ensure proper resource cleanup
     * even when called from synchronous dispose() functions. The cleanup runs in the
     * background and errors are handled internally.
     */
    private close;
}
//# sourceMappingURL=DunamisIntegration.d.ts.map