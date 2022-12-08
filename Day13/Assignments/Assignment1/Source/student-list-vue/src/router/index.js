import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Student from "../components/Student.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "/student/:id",
      name: "student",
      component: Student,
      props: true,
      children: [
        {
          path: "fees",
          name: "fees",
          component: () => import("../components/Fees.vue"),
          props: true,
        },
        {
          path: "result",
          name: "result",
          component: () => import("../components/Result.vue"),
          props: true,
        },
      ],
    },
  ],
});

export default router;
