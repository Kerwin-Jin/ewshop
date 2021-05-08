<template>
  <div class="home">
    <h1>home组件</h1>
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {getAllHomeData} from '@/network/home'
export default {
  name:'Home',
  setup(){
    onMounted(()=>{
      // getAllHomeData
      getAllHomeData().then(res=>{
        console.log(res)
      }).catch(err=>{})

    })
  }
}
</script>
