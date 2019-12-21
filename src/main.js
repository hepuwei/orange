import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/components'
import VueTouch from 'vue-touch';
import observer from '../observer.js'
Vue.prototype.$observer = observer;
import '../public/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '../src/common/index';

Vue.prototype.$observer = new Vue();

Vue.use(VueAwesomeSwiper)　　
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
