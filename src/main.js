import Vue from 'vue'
import App from './App.vue'
import {Chart} from 'chart.js'
import Chartkick from 'vue-chartkick'
import store from './store/index'


Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
