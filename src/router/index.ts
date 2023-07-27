import { createRouter, createWebHistory } from "vue-router";
import Login from '@/pages/Login.vue'
import Users from "@/components/user/Users.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'root',
            component: Users
        }
    ]
})

export default router