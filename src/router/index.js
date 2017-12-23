import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/components/page/Login'], resolve)
    },
    {
      path: '/home',
      redirect: '/particles',
      component: resolve => require(['@/components/page/Home'], resolve),
      children: [
        {
          path: '/board',
          component: resolve => require(['@/components/page/canvas/Board'], resolve)
        },
        {
          path: '/particles',
          component: resolve => require(['@/components/page/canvas/Particles'], resolve)
        },
        {
          path: '/progress',
          component: resolve => require(['@/components/page/canvas/Progress'], resolve)
        },
        {
          path: '/bar',
          component: resolve => require(['@/components/page/echarts/Bar'], resolve)
        },
        {
          path: '/line',
          component: resolve => require(['@/components/page/echarts/Line'], resolve)
        },
        {
          path: '/pie',
          component: resolve => require(['@/components/page/echarts/Pie'], resolve)
        },
        {
          path: '/table',
          component: resolve => require(['@/components/page/elementui/Table'], resolve)
        },
        {
          path: '/loader',
          component: resolve => require(['@/components/page/animation/Loader'], resolve)
        },
      ]
    },
  ]
})
