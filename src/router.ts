import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import { useAuthStore } from "./store/auth";
import Users from "./components/Users.vue";
import UserEdit from "./pages/UserEdit.vue";
import { useFetchUsers } from "./composables/useFetchUsers";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
      meta: {
        requiredAuth: true,
      },
      async beforeEnter() {
        await useFetchUsers().getAll()
      },
      children: [
         {
          path: '',
          component: Users,
          name: "root",
         },
         {
          path: 'user/:id',
          component: UserEdit,
          name: 'userEdit'
         }
      ]
    },
    {
      path: "/login",
      component: Login,
      name: "loginId",
    },
  ],
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiredAuth && !authStore.isAuth) {
    next({
      name: "loginId",
    });
    return;
  }
  next()
});
