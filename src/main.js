import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from './until/axios.js'
Vue.prototype.axios = axios

// var ua = navigator.userAgent
// var isAndroid = /(?:Android)/.test(ua)
// var isFireFox = /(?:Firefox)/.test(ua)
// var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
// var isPhone = /(?:iPhone)/.test(ua) && !isTablet

var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
var pxPreRem = 750 / 100
var fontSize = clientWidth / pxPreRem
document.documentElement.style.fontSize = fontSize + 'px'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
