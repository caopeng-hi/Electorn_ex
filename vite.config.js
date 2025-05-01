/*
 * @Author: caopeng
 * @Date: 2025-05-01 11:02:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-05-01 13:13:29
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
// 导入vue插件
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), AutoImport({
        resolvers: [ElementPlusResolver()],
    }),
    Components({
        resolvers: [ElementPlusResolver()],
    }),],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    server: {
        port: 8877, // 端口号
    }
})