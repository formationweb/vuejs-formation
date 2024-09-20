import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Default from "./layouts/Default.vue";
import Users from "./pages/Users.vue";
import UserEdit from "./pages/UserEdit.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Default,
            children: [
                {
                    path: '',
                    component: Users,
                    name: 'root'
                },
                {
                    path: 'user/:id',
                    component: UserEdit,
                    name: 'user-edit'
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