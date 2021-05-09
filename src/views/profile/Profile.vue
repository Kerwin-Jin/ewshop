<template>
  <div class="profile">
    <navbar>
      <template v-slot:default>个人中心</template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar"
export default {
  name:'Profile',
  components:{
    Navbar
  },
  setup(){
   
  }
}
</script>
