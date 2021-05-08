import {request} from './request'

export function getAllHomeData(){
    return request({
        url:'/api/index'
    })
}