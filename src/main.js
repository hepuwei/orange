import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch';
import '../src/common/index';

Vue.prototype.$observer = new Vue();

Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
