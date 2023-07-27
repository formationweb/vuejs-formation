import { createRouter, createWebHistory } from "vue-router";
import Login from '@/pages/Login.vue'
import LayoutDefault from '@/layouts/Default.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'loginId',
            component: Login
        },
        {
            path: '/',
            name: 'root',
            component: LayoutDefault
        }
    ]
})

export default router