<template>
  <div class="home">
    <navbar>
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>购物车</template>
      <template v-slot:right><i class="iconfont icon-qicheqianlian-select"></i></template>
    </navbar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar'
export default {
  name:'Home',
  components:{
    Navbar
  },
  setup(){
   
  }
}
</script>