// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from './config/ajax'
import './config/rem'
import '@/assets/css/app.css'/*引入公共样式*/

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

const axios = require('axios')
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
