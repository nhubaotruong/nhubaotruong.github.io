import { defineConfig } from "astro/config";
import compress from "astro-compress";
import critters from "astro-critters";
import tailwind from "@astrojs/tailwind";

const crittersConfig = critters({
	pruneSource: true,
	preload: "body",
	inlineFonts: true,
	path: "./dist",
	publicPath: "/",
});

const getSiteUrl = () => {
	if (process.env.CF_PAGES) {
		return (
			process.env.CF_PAGES_URL ||
			`https://${process.env.CLOUDFLARE_DEV_HOSTNAME}`
		);
	}
	return "https://nhubaotruong.github.io";
};

export default defineConfig({
	integrations: [tailwind(), compress(), crittersConfig],
	site: getSiteUrl(),
	output: "static",
});
