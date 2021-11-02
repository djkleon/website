import Vue from 'vue'
import App from './App.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  render: h => h(App),
}).$mount('#app')
