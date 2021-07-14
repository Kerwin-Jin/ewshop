<template>
    <li @mouseenter="isEnter = true" @mouseout="isEnter = false" :class='{"high-light":isEnter}' class="item">
        <label>
            <input type="checkbox" :checked="todo.done">{{todo.name}}{{isEnter}}
            <button class="btn btn-danger" :style="{display:isEnter?'inline-block':'none'}" @click="delTodo(todo.id)">删除</button>
        </label>
    </li>
</template>

<script>
export default {
    name:'Item',
    props:["todo"],
    data(){
        return{
            isEnter:false
        }
    },
    methods:{
        
    }
}
</script>

<style>
.high-light{
    background-color: #eee;
    cursor: pointer;
}
.item{
    height: 40px;
}
</style>