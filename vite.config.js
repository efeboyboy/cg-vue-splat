import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.js"),
      name: "CGVueSplat",
      fileName: (format) => `cg-vue-splat.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "@mkkellogg/gaussian-splats-3d"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@mkkellogg/gaussian-splats-3d": "GaussianSplats3D",
        },
      },
    },
  },
});
