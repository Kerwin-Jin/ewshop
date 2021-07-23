<template>
  <div>
    <ul>
        <li v-for="item in messageArr" :key="item.id">
            <router-link to="/home/message/detail" active-class="active">{{item.title}}</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Message",
    data(){
        return{
            messageArr:[
                {id:1,title:'消息1',content:'吃饭'},
                {id:2,title:'消息2',content:'睡觉'},
                {id:3,title:'消息3',content:'打代码'}
            ]
        }
    }
}
</script>

<style>

</style>