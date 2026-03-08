import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  base: "/",
  plugins: [tanstackRouter({ quoteStyle: "single" }), react(), tailwindcss()],
});
