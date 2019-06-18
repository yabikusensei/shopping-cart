import Vue from 'vue';

import {
  MenService,
  WomenService,
  ChildrenService
} from '../../../services';

const menService = new MenService();
const womenService = new WomenService();
const childrenService = new ChildrenService();

import {
  SET_PRODUCTS_MEN,
  SET_PRODUCTS_WOMEN,
  SET_PRODUCTS_CHILDREN,
  SET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  SET_SHOPPING
} from './mutatyon-types';

const storeProducts = {
  state: {
    menProducts: [],
    womenProducts: [],
    childrenProducts: [],
    allProducts: [],
    productDetail: {},
    shopping: [],
  },
  mutations: {
    [SET_PRODUCTS_MEN](state, products) {
      state.menProducts = products;
    },
    [SET_PRODUCTS_WOMEN](state, products) {
      state.womenProducts = products;
    },
    [SET_PRODUCTS_CHILDREN](state, products) {
      state.childrenProducts = products;
    },
    [SET_ALL_PRODUCTS](state, products) {
      state.allProducts = products;
    },
    [SET_PRODUCT_DETAIL](state, product) {
      state.productDetail = product;
    },
    [SET_SHOPPING](state, product) {
      const found = state.shopping.find(el => el.id === product.id)
      const index = state.shopping.map(item => item.id).indexOf(product.id);

      if (!found) {
        product.total = 1;
        state.shopping.push(product)
      } else {
        state.shopping[index].total = state.shopping[index].total + 1;
        state.shopping = [...state.shopping]
      }
    }
  },
  actions: {
    getProductsMen({ commit }) {
      menService.getAllProducts()
        .then((response) => {
          commit(SET_PRODUCTS_MEN, response)
        })
    },
    getProductsWomen({ commit }) {
      womenService.getAllProducts()
        .then((response) => {
          commit(SET_PRODUCTS_WOMEN, response)
        })
    },
    getProductsChildren({ commit }) {
      childrenService.getAllProducts()
        .then((response) => {
          commit(SET_PRODUCTS_CHILDREN, response)
        })
    },
    getAllProducts({ commit }) {
      Promise.all([
        childrenService.getAllProducts(),
        womenService.getAllProducts(),
        menService.getAllProducts()
      ]).then(([children, women, men]) => {
        const allProducts = children.concat(women).concat(men);
        commit(SET_ALL_PRODUCTS, allProducts)
      })
    },
    getDetail({ commit }, { id, category }) {
      function setDetail(response) {
        commit(SET_PRODUCT_DETAIL, response)
      };
      switch (category) {
        case 'men':
          menService.getProduct(id).then(setDetail)
          break;
        case 'women':
          womenService.getProduct(id).then(setDetail)
          break;
        case 'children':
          childrenService.getProduct(id).then(setDetail)
          break;
      }
    },
    shopping({ commit }, product) {
      commit(SET_SHOPPING, product)
    }
  },
  getters: {

  }
}

export {
  storeProducts
}
