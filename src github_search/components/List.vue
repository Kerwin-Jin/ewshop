<template>
    <div>
        <h2 v-show="listInfo.isFirst">欢迎使用</h2>
        <h2 v-show="listInfo.isLoading">加载中...</h2>
        <h2 v-show="listInfo.errMsg">{{listInfo.errMsg}}</h2>
        <div class="pannel-wrap" v-show="listInfo.users.length">
            <div class="panel panel-default" v-for="user in listInfo.users" :key="user.id">
                <div class="panel-body">
                    <img :src="user.avatar_url" :alt="user.login" class="img-rounded">
                    <h3>{{user.login}}</h3>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"List",
    
    data(){
        return{
            listInfo:{
                users:[],
                isFirst:true,
                isLoading:false,
                errMsg:''
            }
        }
    },
    mounted(){
        this.$bus.$on('get-data',this.getData);
    },
    methods:{
        getData(info){
            this.listInfo = {...this.listInfo,...info}
        }
    },
    beforeDestroy(){
        this.$bus.$off('get-data');
    }
}
</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
}
.pannel-wrap{
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}
.panel-default{
    width: 200px;
    height: 200px;
}
.panel-body{
    text-align: center;
}
</style>