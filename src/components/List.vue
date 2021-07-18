<template>
  <div class="list">
      <ul class="ul-list">
        <Item v-for="t in todos" :key="t.id" :todo="t" :updateTodo="updateTodo" :deleteTodo="deleteTodo"/>
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
    props:["todos","updateTodo","deleteTodo"]
}
</script>

<style>
.list{
    padding: 10px;
    border:1px solid #eee;
    border-radius: 5px;
}
.ul-list{
  padding: 0;
  list-style: none;
}
</style>