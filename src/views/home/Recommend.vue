<template>
  <div class="recommend">
    <div class="item" v-for="item in recommends.slice(0,4)" :key="item.id">
        <a @click.prevent="toDetail(item.id)">
            <img :src="item.cover_url" alt="" style="width:50px;">
            <p>{{item.title}}</p>
        </a>  
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    setup(){

        let router = useRouter();
        let toDetail = (id)=>{
            router.push({path:'/detail',query:{id}})
        }

        return {
            toDetail
        }
    }
}
</script>

<style scoped>
    .recommend{
        width: 100%;
        height: 120px;
        display: flex;
        padding: 5px;
        overflow: scroll;
        font-size: 12px;
    }

    .item{
        flex: 1;
        border:1px solid #f40;
        margin: 3px;
    }
</style>