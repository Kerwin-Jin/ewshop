import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

import { Button,Link} from 'element-ui';
Vue.use(Button).use(Link);

new Vue({
  render:h=>h(App)
}).$mount("#app")