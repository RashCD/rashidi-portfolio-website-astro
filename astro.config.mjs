import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import devtoolsJson from "vite-plugin-devtools-json";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	server: {
		port: 3000,
	},
	integrations: [
		mdx(),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	plugins: [devtoolsJson()],
});
