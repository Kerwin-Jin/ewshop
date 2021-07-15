<template>
  <div class="list">
      <ul>
        <Item v-for="t in todos" :key="t.id" :todo="t" :updateTodo="updateTodo"/>
      </ul>
  </div>
</template>

<script>
import Item from "./Item"
export default {
    name:"List",
    components:{
        Item
    },
    props:["todos","updateTodo"]
}
</script>

<style>
.list{
    border:1px solid #eee;
    border-radius: 5px;
}
</style>