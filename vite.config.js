/*
 * @Author: caopeng
 * @Date: 2025-05-01 11:02:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-05-01 11:09:37
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
// 导入vue插件
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8877, // 端口号
        open: true, // 自动打开浏览器
    }
})