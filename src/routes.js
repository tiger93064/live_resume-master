import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import HomePage from './pages/home/home-page.vue';
import NewsPage from './pages/news/news-detail-page.vue';


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/news',
      component: NewsPage
    }
  ]
});
