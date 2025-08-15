import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pinimg": {
        target: "https://i.pinimg.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pinimg/, ""),
      },
      "/api": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});