import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
      ],
      // dirs: ['src/components'],
      extensions: ['vue'],
    }),
    AutoImport({
      // global imports to register
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        'pinia',
        '@vueuse/core',
      ],
      dirs: ['src/composables'],
      dts: true,
    }),
    UnoCSS(),
  ],
})
