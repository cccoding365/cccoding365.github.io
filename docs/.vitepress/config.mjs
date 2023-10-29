import { defineConfig } from "vitepress";

import nav from './config/nav.config';
import sidebar from './config/sidebar.config';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "CC Space",
	head: [["link", { rel: "icon", href: "/logo.svg" }]],
	cleanUrls: true,

	markdown: {
		lineNumbers: true
	},

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {
		logo: "/logo.svg",
		lastUpdated: true,
		search: { provider: "local", },
		nav,
		sidebar,
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/cccoding365",
			},
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2019-Present DoubledConG",
		},
	},
});
