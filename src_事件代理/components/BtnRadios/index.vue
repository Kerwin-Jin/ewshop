<template>
    <div class="btn-wrapper" @click="radioCheck($event)">
        <Button v-for="(item,index) in subject" :key="index" :subject="item" :index="index" :curIdx="curIdx"/>
    </div>
</template>

<script>
import Button from "./Button.vue"
export default {
    name:"BtnRadios",
    components:{Button},
    props:["subject"],
    data(){
        return {
            curIdx:0
        }
    },
    methods:{
        radioCheck(e){
            const tar = e.target,
                  className = tar.className;

            if(className === 'btn-radio'){
                const index = parseInt(tar.dataset.index);
                console.log(index);
                this.curIdx = index;
            }
        }
    }
}
</script>

<style scoped>
.btn-wrapper{
    margin: 20px;
}
</style>