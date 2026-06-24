import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import UserEdit from "./pages/UserEdit.vue";
import Users from "./components/Users.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: 'user/:id',
                    component: UserEdit,
                    name: 'userEdit'
                },
                {
                    path: '',
                    component: Users,
                    name: 'home'
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            name: 'loginId'
        }
    ]
})