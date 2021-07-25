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
                            path:'detail/:id/:title/:content',   //动态传参，通过params方式
                            // path:'detail',
                            component:Detail,
                            name:'xiangqing',    //给路由命名
                            // props:true,          //映射params参数为props传给路由组件
                            props(route){
                                console.log(route);
                                const {id,title,content} = route.params;
                                return {id,title,content}
                            }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                },
                {
                    path:'',
                    redirect:'news'
                }
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
}

// 创建一个路由器，管理所有的路由
const router = new VueRouter(routes)


// 路由守卫
router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    next();
})

export default router