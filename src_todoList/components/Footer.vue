<template>
  <div class="footer">
      <div>
        <input type="checkbox" v-model="isAll">全选/全不选
      </div>
      <div>
        已完成<span class="badge badge-success">{{doneCount}}</span>/全部<span class="badge">{{total}}</span>
      </div>
      <div>
        <button class="btn btn-danger" @click="delDone">删除已完成任务</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'Footer',
    props:['todos','updateAll','clearAll'],
    
    computed:{
      doneCount(){
        return this.todos.filter(item=>item.done).length;
      },
      total(){
        return this.todos.length;
      },

      // 计算属性的完整写法
      isAll:{
        set(flag){
          this.updateAll(flag);
        },
        get(){
          return this.doneCount === this.total && this.total > 0;
        }
      }
    },
    methods:{
      delDone(){
        if(confirm('确定要删除已完成的todo吗？')){
          this.clearAll();
        }
      }
    }
}
</script>

<style>
.footer{
    height: 50px;
    line-height: 50px;
    margin: 10px;
}
.footer div{
    float: left;
    margin-left: 20px;
}
.footer div:nth-child(3){
    float:right;
}
.badge-success{
  background-color: #5cb85c;
}
</style>