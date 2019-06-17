import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  storeProducts as products
} from './features';

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products
  }
})
