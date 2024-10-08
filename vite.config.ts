import { resolve } from 'node:path'
import { defineConfig } from 'vite'
// plugin
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
  ],
})
