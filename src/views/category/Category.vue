<template>
  <div class="category">
    <navbar>
      <template v-slot:default>分类</template>
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