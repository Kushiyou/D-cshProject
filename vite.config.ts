import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3366',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'')
      }

    }
  },
  plugins: [
    vue(), 
    VueDevTools(), 
    createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  })
],
  resolve: {
    alias: {
      '@': path.resolve("./src")
    }
  },
  //配置sass
  css:{
    preprocessorOptions:{
      scss:{
        javascriptEnabled:true,
        additionalData: '@import "./src/styles/variable.scss";',
      }
    }
  }
})
