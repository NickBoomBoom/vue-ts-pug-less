import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '',
  routes: [
    // 测试页 start
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/other/:id',
      name: 'other',
      component: () => import(/* webpackChunkName: "other" */'@/views/test/other.vue')
    },
    // 测试页  end
  ]
})
