<template>
  <div class="container">
    <Search/>
    <List/>
    <List/>
  </div>
</template>

<script>
import Search from "./components/Search.vue"
import List from "./components/List.vue"
export default {
  name:"App",
  components:{Search,List},
  data(){
    return {
      keyword:"github"
    }
  }
}
</script>

<style>

</style>