import Vue from 'vue'
import Router from 'vue-router'
import store from './store'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*', 
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./components/dashbord.vue'),
      beforeEnter (to, from, next) {
        if(store.state.auth){
            next()
        } else {
            next('/')
        }
    }
    },
    {
      path: '/addAdmin',
      name: 'addAdmin',
      component: () => import('./components/addAdmin.vue'),
      beforeEnter (to, from, next) {
        if(store.state.auth){
            next()
        } else {
            next('/')
        }
    }
    },
    {
      path: '/allAdmin',
      name: 'allAdmin',
      component: () => import('./components/allAdmin.vue'),
      beforeEnter (to, from, next) {
        if(store.state.auth){
            next()
        } else {
            next('/')
        }
    }
    },
    {
      path: '/addContract',
      name: 'addContract',
      component: () => import('./components/addContract.vue'),
      beforeEnter (to, from, next) {
        if(store.state.auth){
            next()
        } else {
            next('/')
        }
    }
    },
    {
      path: '/allContract',
      name: 'allContract',
      component: () => import('./components/allContract.vue'),
      beforeEnter (to, from, next) {
        if(store.state.auth){
            next()
        } else {
            next('/')
        }
    }
    },

  ]
})
