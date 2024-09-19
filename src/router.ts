import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Default from "./layouts/Default.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Default
        },
        {
            path: '/login',
            component: Login,
            name: 'loginId'
        }
    ]
})