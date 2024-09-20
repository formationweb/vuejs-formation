import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Default from "./layouts/Default.vue";
import Users from "./pages/Users.vue";
import UserEdit from "./pages/UserEdit.vue";
import { useAuthStore } from "./store/auth";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Default,
            meta: {
                requiredAuth: true
            },
            beforeEnter() {
                // plus tard
            },
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

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiredAuth && !authStore.isAuth) {
        next({
           name: 'loginId' 
        })
        return
    }
    next()
})