import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

import HomePage from './pages/home/home-page.vue';
import NewsPage from './pages/news/news-detail-page.vue';

import D3Page from './pages/d3/main.vue';


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
    },
    {
      path: '/d3',
      component: D3Page
    }
  ]
});
