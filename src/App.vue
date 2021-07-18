<template>
  <div class="container todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo"/>
    <Footer :todos="todos" :updateAll="updateAll" :clearAll="clearAll"/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name:"App",
  components:{Header,List,Footer},
  data(){

    let todos;
    try {
      // todos = JSON.parse(localStorage.getItem("todos") ) || [];
      todos = JSON.parse(localStorage.getItem("todos")) || [];
      console.log(todos);
    } catch (error) {
      alert("本地数据异常，数据将被重置！");
      localStorage.removeItem("todos");
      todos = [];
    }
    return {
      todos:todos
    }
  },
  watch:{
    todos(newValue){
      localStorage.setItem('todos',JSON.stringify(newValue));
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
    },

    // 删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter(item=>{
        return item.id!=id;
      })
    },
    //updateAll
    updateAll(done){
      this.todos = this.todos.map(item=>{
        return {...item,done}
      })
    },
    // 清除已完成
    clearAll(){
      this.todos = this.todos.filter(item=>{
        return !item.done;
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