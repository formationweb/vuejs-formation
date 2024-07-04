import { createRouter, createWebHistory } from "vue-router";
import Users from "./components/users/Users.vue";
import Login from './pages/Login.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Users
        },
        {
            path: '/login',
            component: Login
        }
    ]
})