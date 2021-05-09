import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile'),
    meta:{
      title:'个人中心'
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import(/* webpackChunkName: "shopcart" */ '../views/shopcart/Shopcart'),
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail/Detail'),
    meta:{
      title:'详情'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '../views/category/Category'),
    meta:{
      title:'分类'
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{


  next();
  document.title = to.meta.title;
})
export default router
