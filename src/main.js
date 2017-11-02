import Vue from 'vue'
import VueResouse from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResouse)
/*
*下面这句话不要进行删除--开发环境
默认eslint是不允许使用new关键字的
eslint-disable no-new
禁止eslint检测new关键字
**/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
