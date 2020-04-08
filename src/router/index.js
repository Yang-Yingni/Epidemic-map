import Vue from 'vue'
import VueRouter from 'vue-router'

const Map = () => import('../views/Map.vue')
const LineChart = () => import('../views/LineChart.vue')

Vue.use(VueRouter)

const routes = [
  {
    //配置默认页面，一点进去的页面
    path:'',
    redirect: '/map'
    //redirect重定向，当页面路径为''（一进去）时，自动进入
  },
  {
    path: '/map',
    component: Map
  },
  {
    path: '/linechart',
    component: LineChart
  }
]

const router = new VueRouter({
  routes
})

export default router
