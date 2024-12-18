import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: resolve("./frontend/static/src"),
  base: "/static/",
  plugins: [vue()],
  build: {
    outDir: resolve("./frontend/static/dist"),
    assetsDir: "",
    manifest: "manifest.json",
    emptyOutDir: true,
    rollupOptions: {
      // Overwrite default .html entry to main.ts in the static directory
      input: resolve("./frontend/static/src/main.ts"),
    },
  },
});

