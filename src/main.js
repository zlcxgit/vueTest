// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import helloSon from './components/helloSon.vue'
import helloTwo from './components/helloTwo.vue'
import kInput from './components/KInput.vue'
import KFormItem from './components/KFormItem.vue'
import kForm from './components/KForm.vue'
import kButton from './components/kButton.vue'
Vue.component('hello-son',helloSon)
Vue.component('hello-two',helloTwo)
Vue.component('k-input',kInput)
Vue.component('k-form-item',KFormItem)
Vue.component('k-form',kForm)
Vue.component('k-button',kButton)



import axios from 'axios'
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
