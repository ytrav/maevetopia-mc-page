import { createWebHistory, createRouter } from 'vue-router';
import AppHome from '../views/AppHome.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;