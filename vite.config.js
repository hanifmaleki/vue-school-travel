import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { fileUrlToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  /* resolve: {
    alias: {
      '@': fileUrlToPath(new URL('./src', import.meta.url)),
    },
  },*/
  server: {
    proxy: {
      '/api': {
        target: 'https://travel-dummy-api.netlify.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },

  },
  plugins: [vue()],
})
