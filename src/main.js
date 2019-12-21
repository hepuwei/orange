import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/components'
import VueTouch from 'vue-touch';
import '../src/common/index';

Vue.prototype.$observer = new Vue();
import '../public/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)　　
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
