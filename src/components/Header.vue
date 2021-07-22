<template>
   <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="header">
            <h2>{{title}}</h2>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return {
            title:"Vue Router Demo"
        }
    }
}
</script>

<style scoped>
.header:hover{
    box-shadow: 3px 3px 10px 10px #f40;
    cursor: pointer;
}
</style>