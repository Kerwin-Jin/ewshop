<template>
  <div class="detail">
    <navbar>
      <template v-slot:left><i class="iconfont icon-left"></i></template>
      <template v-slot:default>详情{{id}}</template>
    </navbar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar'
import {useRoute} from 'vue-router';
import {ref} from 'vue'
export default {
  
  name:'Home',
  components:{
    Navbar
  },
  setup(){
    let id = ref(0);
    let route = useRoute()

    id = route.query.id;

    return {
      id
    }
  }
}
</script>