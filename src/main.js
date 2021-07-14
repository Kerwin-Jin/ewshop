import Vue from 'vue'
import App from './App.vue'
import pluginssss from './plugins/plugin'

Vue.config.productionTip = false;
Vue.use(pluginssss);

new Vue({
  render:h=>h(App)
}).$mount("#app")