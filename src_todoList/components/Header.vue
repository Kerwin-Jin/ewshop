<template>
  <div class="col-md-8 header">
    <div class="form-group">
        <input type="text" class="form-control" placeholder="请输入待办事项，按回车键确认" v-model="name" @keyup.enter="add()">
    </div>
  </div>
</template>

<script>
export default {
    name:"Header",
    data(){
      return {
        name:''
      }
    },
    props:["addTodo"],
    methods:{
      add(){

        if(!this.name.trim()) return alert("输入不能为空");

        const todoObj = {id:Date.now(),name:this.name,done:false}
        console.log(todoObj);

        this.addTodo(todoObj);
        this.name = '';
      }
    }
}
</script>

<style scoped>
    .header{
        margin-top: 20px;
    }
</style>