<template>
  <div>
      <h2>和:<span class="badge">{{sum}}</span></h2>
      <h2>大和:<span class="badge">{{bigSum}}</span></h2>
      <h2>大和:<span class="badge">{{myname}}</span></h2>
        <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
      <button @click="increment(n)" class="btn btn-primary">+</button>
      <button @click="decrement(n)" class="btn btn-danger">-</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:"Count",
    data(){
        return{
            n:1
        }
    },
    computed:{
        // 对象形式
        // ...mapState({he:'sum',name:'myname'})
        // 数组形式
        ...mapState(['sum','myname']),
        ...mapGetters(['bigSum'])
    },
    methods:{

        // 映射的
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        // 靠自己写的
        // decrement(){
        //     this.$store.dispatch('jian',this.n);
        // },

        // *****************************
        ...mapActions({decrement:"jian"})
    }
}
</script>

<style>

</style>