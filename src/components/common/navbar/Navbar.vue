<template>
    <div class="navbar">
        <div @click="goback()"><slot name="left"></slot></div>
        <div><slot>商城</slot></div>
        <div><slot name="right"></slot></div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    name:'Navbar',
    setup(){

        
        const router = useRouter();

        const goback = ()=>{
            console.log(1111);
            router.go(-1);
        }

        return {
            goback
        }
    }

}
</script>

<style scoped>
    .navbar{
        width: 100%;
        height: 40px;
        display: flex;
        text-align: center;
        line-height: 40px;
        background: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
    }
    .navbar div:nth-child(1),.navbar div:nth-child(3){
        width: 40px;
    }
    .navbar div:nth-child(2){
        flex: 1;
    }
</style>