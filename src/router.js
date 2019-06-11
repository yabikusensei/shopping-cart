import Vue from 'vue'
import Router from 'vue-router'

import {
  routeLayout,
  routeAuth
} from './features'

Vue.use(Router)

const ROUTES = [
  routeLayout,
  routeAuth
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: ROUTES
})
