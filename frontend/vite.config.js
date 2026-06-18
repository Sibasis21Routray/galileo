import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["galileonext.com", "www.galileonext.com"],
  },
  preview: {
    allowedHosts: ["galileonext.com", "www.galileonext.com"],
  },
});