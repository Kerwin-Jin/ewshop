<template>
  <div id="app" class="container">
    <Header/>
    <div class="link">
      <router-link active-class="active" to="/home">Home</router-link>
      <router-link active-class="active" to="/about">About</router-link>
    </div>
    <router-view>
      <Home/>
      <About/>
    </router-view>
    
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name:"App",
  components:{
    Header,
  }
}
</script>
<style scoped>
.link{
  padding: 20px;
  border: 2px dashed #f40;
}
.link a{
  border: 1px solid gray;
  padding: 10px;
  text-decoration: none;
  margin: 10px;
}
.link
.active{
  background: #f40;
}
</style>