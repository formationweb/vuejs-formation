import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import Users from "./components/Users.vue";
import UserEdit from "./pages/UserEdit.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Main,
        children: [
            {
                path: '',
                component: Users,
                name: 'home',
            },
            {
                path: 'user/:id',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    }, {
        path: '/login',
        name: 'loginId',
        component: Login
    }]
})