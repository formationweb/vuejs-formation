import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            name: 'home'
        },
        {
            path: '/login',
            component: Login,
            name: 'loginId'
        }
    ]
})