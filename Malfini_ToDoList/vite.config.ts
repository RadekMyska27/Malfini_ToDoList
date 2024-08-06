import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      scopeBehaviour: "local",
    },
  },
  // resolve: {
  //   alias: {
  //     "@": "/src",
  //     "@components": "/src/components",
  //     "@pages": "/src/pages",
  //     "@services": "/src/services",
  //     "@context": "/src/context",
  //     "@constants": "/src/constants",
  //   },
  // },
});
