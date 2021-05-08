import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:5000
    })

    // 请求拦截
    instance.interceptors.request.use(config=>{

        return config;
    },err=>{

    })

    // 响应拦截
    instance.interceptors.response.use(res=>{

        // return res.data?res.data:res;
        return res.data || res;
    },err=>{
        // 如果有错误，这里统一去处理
    })

    // 返回一个axios对象
    return instance(config)
}