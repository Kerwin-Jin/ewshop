<template>
    <li class="item">
        <input type="checkbox" :checked="todo.done" @click="update(todo.id,$event)">{{todo.name}}
        <button class="btn btn-danger del-btn" @click="delTodo(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'Item',
    props:["todo","updateTodo","deleteTodo"],
    data(){
        return{
            isEnter:false
        }
    },
    methods:{
        update(id,event){
            console.log(id,event.target.checked);
            const {checked} = event.target;
            this.updateTodo(id,checked);
        },
        delTodo(id){
            this.deleteTodo(id);
        }
    }
}
</script>

<style>
.high-light{
    background-color: #eee;
    cursor: pointer;
}
.item{
    padding: 3px;
    height: 40px;
    line-height: 40px;
}
.item input{
    margin-right: 10px;
}
.item:hover{
    background-color: #eee;
    cursor: pointer;
}
.item:hover .del-btn{
    display: inline-block;
}
.del-btn{
    display: none;
    float: right;
}
</style>