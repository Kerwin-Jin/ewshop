import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"
const routes = {
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        },
        {
            path:'/about',
            component:About
        }
    ]
}

// 创建一个路由器，管理所有的路由
const router = new VueRouter(routes)

export default router