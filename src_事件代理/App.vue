<template>
  <div id="app">
    <BtnRadions :subject="subject"/>
  </div>
</template>

<script>
import BtnRadions from '@/components/BtnRadios'
export default {
  name:"App",
  components:{
    BtnRadions
  },
  data(){
    return {
      subject:[
        "Vue",
        "React",
        "Angular"
      ]
    }
  }
}
</script>

<style scoped>

</style>