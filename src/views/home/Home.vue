<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <navbar>
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>图书</template>
      <template v-slot:right><i class="iconfont icon-gerenzhongxin-zhong"></i></template>
    </navbar>


    <!-- banner区域 -->

    <div class="banner">
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180506/23425bd6b810419498e5ee79160c1dbb.jpeg" alt="">
    </div>

    <!-- Recommend -->
    <recommend :recommends='recommends'></recommend>
  </div>
</template>

<script>
import {ref,onMounted} from 'vue';
import {getAllHomeData} from '@/network/home';
import Navbar from '@/components/common/navbar/Navbar';
import Recommend from './Recommend';
export default {
  name:'Home',
  components:{
    Navbar,
    Recommend
  },
  setup(){

    let recommends = ref([]);

    onMounted(()=>{
      getAllHomeData().then(res=>{
        console.log(res.goods.data);
        recommends.value = res.goods.data;
      }).catch(err=>{})
    })

    return {
      recommends
    }
  }
}
</script>

<style scoped>
.banner{
  margin-top: 40px;
  width: 100%;
}
.banner img{
  width: 100%;
  height: 200px;
}
</style>
