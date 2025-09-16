import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		inspect(),
		checker({
			typescript: true,
			biome: true,
		}),
		viteCompression({
			algorithm: "gzip",
		}),
		visualizer({
			open: true,
			gzipSize: true,
		}),
	],
	build: {
		minify: "terser",
		terserOptions: {},
	},
});
