<template>
  <div class="container todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :updateTodo="updateTodo"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name:"App",
  components:{
    Header,
    List,
    Footer
  },
  data(){
    return {
      todos:[
        {id:'001',name:'抽烟',done:true},
        {id:'002',name:'喝酒',done:true},
        {id:'003',name:'烫头',done:false},
        {id:'004',name:'写代码',done:false}
      ]
    }
  },
  methods:{

    // 添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj);
    },

    // 修改一个todo
    updateTodo(id,done){
      this.todos = this.todos.map((todo)=>{
        if(todo.id == id) return {...todo,done};
        else return todo;
      })
    }
  }
}
</script>

<style scoped>
.todo-wrap{
  margin-top: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>