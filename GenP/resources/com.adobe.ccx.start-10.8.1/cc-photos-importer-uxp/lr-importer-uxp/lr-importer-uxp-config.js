/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2021 Adobe
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

// Most of this will dissapear once uxp fixes Blob
if (!window.Image) {
	window.Image = function(width, height) {
		let img = document.createElement('img');
		if (width !== undefined) {
			img.width = width;
		}
		if (height !== undefined) {
			img.height = height;
		}
		return img;
	};
}
window.dispatchEvent = document.dispatchEvent.bind(document);
window.addEventListener = document.addEventListener.bind(document);
window.removeEventListener = document.removeEventListener.bind(document);
if (!window.screen) {
	window.screen = {
		get width() {
			return window.document && window.document.offsetWidth;
		},

		get height() {
			return window.document && window.document.offsetHeight;
		},
	};
}

if (!window.navigator || !window.navigator.language) {
	window.navigator = window.navigator || {};
	window.navigator.language = 'en-US';
}

// Page Resources
window.PageResources = {
	empty_asset_png:
		'https://d2h1y5ffuqhkfb.cloudfront.net/assets/application/empty1x1-80ea6d7af46a88de9a8852c2706c7c91.png',
	asset_host: 'd2h1y5ffuqhkfb.cloudfront.net',
	have_asset_host: true,
}

window.PageResources.asmcrypto_path =
	'https://d2h1y5ffuqhkfb.cloudfront.net/assets/workers/asmcrypto.min-14fec4d3c73ee2f465e98e0b01810f9d.js';

const DetectionHelper = {};
window.DetectionHelper = DetectionHelper;
window.Feature = {
	is_enabled: feature => {
		return window.Feature.feature_hash[feature] == true;
	},
};
window.Feature.feature_hash = {
	disable_old_gnav: true,
	gdpr: true,
	dry_dropdown_menus: true,
	more_locales: true,
	always_badge: true,
	connections_plus: true,
	display_tab: true,
	display_tab_tutorial: true,
	slideshow_settings_v2: true,
	sdk_four_colorstops: true,
	popum: true,
	prerelease_indicator: true,
	display_tab_sticky: true,
	display_tab_reorder_coachtip: true,
	display_tab_for_all: true,
	album_gallery_share: true,
	best_photos_send_to_pf: true,
	max_icons: true,
	share_tab_enable_gallery_share: true,
	layout_segment_titles: true,
	display_tab_filtering: true,
	album_filter_message: true,
	force_delete_share_modifiers: true,
	folder_modifier_keys: true,
	newrelic_workaround: true,
	drag_drop_album_header_cover: true,
	display_user_created_dates: true,
	importer_scroll_update: true,
	safer_grid_source: true,
	filter_conversion_message_update: true,
	sdk_incomplete_assets: true,
	better_filter_counts: true,
	sdk_catalog_publish: true,
	sdk_no_album_assets: true,
	share_tab_comments_likes: true,
	display_header_smoother_collapsing: true,
	album_sort_user_created: true,
	news_version_highlighting: true,
};
window.Feature.prerelease = false;
window.Feature.prerelease_hash = ['collaborative_proofing'];

window.LrSDK_ImsHost = 'https://ims-na1.adobelogin.com';
