import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Main
    }, {
        path: '/login',
        name: 'loginId',
        component: Login
    }]
})