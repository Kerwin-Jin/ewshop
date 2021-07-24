<template>
  <div>
    <h2>Home组件</h2>
    <ul class="nav nav-pills">
        <li role="presentation" class="active">
            <router-link to="/home/news" active-class="active">News</router-link>
        </li>
        <li role="presentation">
            <router-link to="/home/message" active-class="active">Message</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>