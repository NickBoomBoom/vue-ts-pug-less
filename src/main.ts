import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import Component from 'vue-class-component'
import '@/assets/css/iconfont.css'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

console.table(process.env)

router.beforeEach((to, from, next) => {

  next()
})

Vue.config.productionTip = false

Vue.prototype.$toast = (msg: any): void => {
  console.log('toast')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
