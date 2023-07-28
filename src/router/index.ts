import { createRouter, createWebHistory } from "vue-router";
import Login from '@/pages/Login.vue'
import UserEdit from '@/pages/UserEdit.vue'
import LayoutDefault from '@/layouts/Default.vue'
import Users from "@/pages/Users.vue";
import { useAuthStore } from "@/store/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'loginId',
            component: Login
        },
        {
            path: '/',
            component: LayoutDefault,
            meta: { requiredAuth: true },
            children: [
                {
                    path: 'user/:id',
                    name: 'user-edit',
                    component: UserEdit
                },
                {
                    path: '',
                    name: 'root',
                    component: Users
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiredAuth && !authStore.isAuth) {
        next({
            name: 'loginId',
            query: {
                redirect: to.fullPath
            }
        })
    }
    else {
        next()
    }
})

export default router