import Vue from 'vue'
import App from './App.vue'
import './styles/base.css'
import './styles/index.css'
import store from './store'
// 导入Vuex
import Vuex from 'vuex'
// 注册Vuex
Vue.use(Vuex)

Vue.config.productionTip = false

const vm =new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
console.log(vm);