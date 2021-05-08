<template>
  <div id="nav">
    <router-view></router-view>

    <div id="navbar">
      <router-link to="/home" active-class="active"><i class="iconfont icon-shouye"></i><div>首页</div></router-link>
      <router-link to="/category" active-class="active"><i class="iconfont icon-category"></i><div>分类</div></router-link>
      <router-link to="/shopcart" active-class="active"><i class="iconfont icon-qicheqianlian-select"></i><div>购物车</div></router-link>
      <router-link to="/profile" active-class="active"><i class="iconfont icon-gerenzhongxin-zhong"></i><div>我的</div></router-link>
    </div>
    
  </div>
</template>

<style lang="scss">
@import url("https://at.alicdn.com/t/font_2535714_m6bcjemxoh.css");
@import './assets/css/base.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.active{
  color: #f40;
}
#navbar{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 20px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding: 5px;
  background: #f6f6f6;

  i{
    font-size: 16px;
  }

  div{
    font-size: 14px;
  }
}
</style>
