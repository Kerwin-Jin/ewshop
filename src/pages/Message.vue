<template>
  <div>
    <ul>
        <li v-for="item in messageArr" :key="item.id">
            <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}/${item.content}`" active-class="active">{{item.title}}</router-link> -->
            <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}&content=${item.content}`" active-class="active">{{item.title}}</router-link> -->
            <router-link :to="{name:'xiangqing',params:{id:item.id,title:item.title,content:item.content}}" active-class="active">{{item.title}}</router-link>
            <button @click="pushShow(item)">push</button>
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
    },
    methods:{
        pushShow(item){
            // 编程式导航
            this.$router.push({name:'xiangqing',params:{id:item.id,title:item.title,content:item.content}});
            // this.$router.replace({name:'xiangqing',params:{id:item.id,title:item.title,content:item.content}});
        }
    }
}
</script>

<style>

</style>