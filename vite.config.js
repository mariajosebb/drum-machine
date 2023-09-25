import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/s3": {
        target: "https://s3.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/s3/, "/freecodecamp/drums"),
      },
    },
  },
});
