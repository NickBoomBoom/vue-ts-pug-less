import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import Component from 'vue-class-component'
import { Indicator, Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/iconfont.css'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

console.table(process.env)

router.beforeEach((to, from, next) => {
  Indicator.close()
  next()
})

Vue.config.productionTip = false

Vue.prototype.$toast = (msg: any): void => {
  Toast(msg)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
