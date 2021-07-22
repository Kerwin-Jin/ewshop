import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({

  // 中央事件总线进行挂载
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  render:h=>h(App)
}).$mount("#app")