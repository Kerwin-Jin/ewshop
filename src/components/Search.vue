<template>
  <div class="jumbotron">
    <h1>Searh Github Users</h1>
    <input type="text" class="form-control" placeholder="请输入用户名" v-model="keyWord">
    <button class="btn btn-primary" @click="search">Search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Search",
    data(){
        return{
          keyWord:''
        }
    },
    methods:{
      async search(){
        try {
          const resp = await axios.get("https://api.github.com/search/users",{params:{q:this.keyWord}});
          const {items} = resp.data;
          console.log(items);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
}
</script>

<style scoped>
button{
    margin-top: 20px;
}
</style>