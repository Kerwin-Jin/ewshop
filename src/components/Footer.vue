<template>
  <div class="footer">
      <input type="checkbox">
      <span>已完成0/全部2</span>
      <button class="btn btn-danger">删除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
.footer{
    margin: 10px;
    display: flex;
    justify-content: space-between;
}
</style>