import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const products = {
  state: {
    shopping: [
      0, 1, 2
    ]
  },
  mutations: {
    increment(state, n) {
      state.shopping.push(n)
    }
  },
  actions: {
    increment({ commit }, n) {
      commit('increment', n)
    }
  },
  getters: {}
}

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
