import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue' // 静态导入，不需要懒加载，因为项目开始运行就要加载，不需要等待

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    // 函数式导入，需要懒加载，因为不一定会访问，所以需要等待
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    // 函数式导入，需要懒加载，因为不一定会访问，所以需要等待
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    // 函数式导入，需要懒加载，因为不一定会访问，所以需要等待
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
