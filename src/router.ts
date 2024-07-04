import { createRouter, createWebHistory } from "vue-router";
import Default from './layouts/Default.vue';
import Login from './pages/Login.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            component: Default
        },
        {
            path: '/login',
            name: 'loginId',
            component: Login
        }
    ]
})