import { createWebHistory, createRouter } from "vue-router";
// import AppHome from "../views/AppHome.vue";
import AppCountdown from "../views/AppCountdown.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: AppCountdown,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
