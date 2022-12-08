import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn } from "../auth";

import SignIn from "../components/SignIn.vue";
import About from "../components/About.vue";
import Protected from "../components/Protected.vue";
import Welcome from "../components/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: SignIn,
      name: "signin",
      beforeEnter: () => {
        if (isLoggedIn()) {
          return { name: "welcome" };
        }
      },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome,
      beforeEnter: () => {
        if (!isLoggedIn()) {
          return { name: "signin" };
        }
      },
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/protected",
      component: Protected,
      beforeEnter: () => {
        if (!isLoggedIn()) return { name: "signin" };
      },
    },
  ],
});

export default router;
