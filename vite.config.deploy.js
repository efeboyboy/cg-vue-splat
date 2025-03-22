import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Config for deploying as a standalone app
export default defineConfig({
  plugins: [
    vue(),
    // Add CORS headers required for external splat files
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
  // No 'lib' configuration for deployment build
  build: {
    outDir: "dist-deploy",
  },
});
