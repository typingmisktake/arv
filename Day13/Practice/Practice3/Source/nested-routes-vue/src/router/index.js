import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import User from "../components/User.vue";
import UserDetails from "../components/UserDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", name: "home", component: Home },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        { path: "details", name: "userDetails", component: UserDetails },
      ],
    },
  ],
});

export default router;
