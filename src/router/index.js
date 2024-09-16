import { createWebHistory, createRouter } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppCountdown from "../views/AppCountdown.vue";

// take timestamp and if it's before 12pm utc on september 21st 2024, return AppCountdown, else return AppHome
const before = new Date("2024-09-21T12:00:00Z").getTime();
const now = new Date().getTime();
const isBefore = now < before;

const routes = [
  {
    path: "/",
    name: "Home",
    component: isBefore ? AppCountdown : AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
