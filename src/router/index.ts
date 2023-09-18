import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

type Route = {
  [key: string]: `/${string}`;
};

interface RoutesObj extends Route {
  home: `/${string}`,
  request: `/${string}`,
}

export const routesObj: RoutesObj = {
  home: '/',
  request: '/request',
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routesObj.home,
      name: 'home',
      component: HomeView,
    },
    {
      path: routesObj.request,
      name: 'request',
      component: () => import('@/views/RequestView.vue'),
    },
  ],
});

export default router
