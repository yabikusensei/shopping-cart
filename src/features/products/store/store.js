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
    }
  },
  actions: {
    getProductsMen({commit}) {

    },
    getProductsWomen({commit}) {

    },
    getProductsChildren({commit}) {

    },
    getAllProducts({ commit }) {
      Promise.all([
        childrenService.getAllProducts(),
        womenService.getAllProducts(),
        menService.getAllProducts()
      ]).then(([children,women,men]) => {
        const allProducts = children.concat(women).concat(men);
        commit(SET_ALL_PRODUCTS, allProducts)
      })
    },
    getDetail({ commit }, {id, type}) {
      if (type === 'children') {
        childrenService.getProduct(id).then((product) => {
          commit(SET_PRODUCT_DETAIL, product)
        })
      } else if (type === 'men') {
        console.log('men!!!')
      } else if (type === 'women') {
        console.log('women!!!')
      }
    }
  },
  getters: {

  }
}

export {
  storeProducts
}
