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
    // Cloudflare Pages sets CF_PAGES=1 during build
    if (process.env.CF_PAGES) {
        // CF_PAGES_URL is available in production, CLOUDFLARE_DEV_HOSTNAME in preview
        return (
            process.env.CF_PAGES_URL ||
            `https://${process.env.CLOUDFLARE_DEV_HOSTNAME}`
        );
    }
    return "https://nhubaotruong.github.io"; // Default to GitHub Pages
};

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), compress(), crittersConfig],
    site: getSiteUrl(),
});
