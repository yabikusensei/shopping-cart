import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  storeProducts as products
} from './features';

export default new Vuex.Store({
  state: {
    count: 0,
    name: 'sebas',
    users: [
      {
        id: 0,
        name: 'cero'
      },
      {
        id: 1,
        name: 'uno'
      }
    ]
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.users.find(user => user.id === id)
    }
  },
  mutations: {
    increment(state, n) {
      state.count += n
    }
  },
  actions: {
    increment({ commit }, n) {
      console.log('n', n)
      commit('increment', n)
    }
  },
  modules: {
    products
  }
})
