import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import(/* webpackChunkName: "shopcart" */ '../views/shopcart/Shopcart')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail/Detail')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/category/Category')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
