<template>
    <button :class="['btn-radio',{active:curIdx==index}]" :data-index="index">{{subject}}</button>
</template>

<script>
export default {
    name:"Button",
    props:{
        subject:String,
        index:Number,
        curIdx:Number
    }
}
</script>

<style scoped>
.btn-radio{
    height: 34px;
    outline: none;
    padding: 0 15px;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color:#999;
    background-color: #eee;
}
.btn-radio:hover{
    color: #333;
}
.btn-radio.active{
    background-color: #fff;
    color:red;
    border: 2px solid red;
}
</style>