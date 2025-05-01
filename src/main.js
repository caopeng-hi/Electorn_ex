/*
 * @Author: caopeng
 * @Date: 2025-05-01 11:03:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-05-01 11:12:22
 * @Description: 请填写简介
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'reset.css'

import router from './router'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus).use(router).use(pinia)
app.mount('#app')