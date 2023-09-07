import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...
    vue(),
    unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  }
})
