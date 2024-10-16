import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import { useAuthStore } from "./store/auth";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
      name: "root",
      meta: {
        requiredAuth: true,
      },
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
