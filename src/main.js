import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import jquery from 'jquery'
import Vuetify from 'vuetify'


require('bootstrap')
require('jquery.easing')
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')
require('./assets/css/customCss.css')


Vue.use(Vuetify)


Vue.prototype.jquery = jquery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
