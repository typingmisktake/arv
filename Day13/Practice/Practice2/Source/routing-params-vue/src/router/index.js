import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/greetings",
      name: "greetings",
      props: (route) => ({
        name: route.query.name,
      }),
      component: () => import("../components/Greetings.vue"),
    },
  ],
});

export default router;
