import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
require('./assets/css/customCss.css')


Vue.prototype.jquery = jquery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
