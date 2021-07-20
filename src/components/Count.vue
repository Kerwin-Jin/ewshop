<template>
  <div>
      <h2>和{{$store.state.sumA}}</h2>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
    name:"Count",
    data(){
        return{
            countNum:78,
            n:1
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n);
        }
    }
}
</script>

<style>

</style>