import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/index.vue'

export const layout  = Layout;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect:'/home',
    children:[
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
          },
          {
            path: '/test',
            name: 'Text',
            component: () => import(/* webpackChunkName: "about" */ '../views/Text.vue')
          }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
