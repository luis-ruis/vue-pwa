import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Mi PWA Vue",
        short_name: "VuePWA",
        description: "Una PWA mínima con Vue 3",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "vue-pwa",
    rollupOptions: {
      output: {
        assetFileNames: "vue-pwa/[name].[hash][extname]",
        chunkFileNames: "vue-pwa/[name].[hash].js",
        entryFileNames: "vue-pwa/[name].[hash].js",
      },
    },
  },

})
