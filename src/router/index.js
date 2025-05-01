import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'
const routers = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router