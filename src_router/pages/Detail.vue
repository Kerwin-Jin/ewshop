<template>
  <div>
      <p>ID:{{id}}</p>
      <p>TITLE:{{title}}</p>
      <p>CONTENT:{{content}}</p>
  </div>
</template>

<script>
export default {
    name:"Detail",
    props:['id','title','content']
}
</script>

<style>

</style>