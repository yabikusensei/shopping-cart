import {
  ChildrenService,
  WomenService,
  MenService
} from '../../../services';

const childrenService = new ChildrenService();
const womenService = new WomenService();
const menService = new MenService();

import {
  SET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL
} from './mutatyon-types';

const storeProducts = {
  state: {
    allProducts: [],
    menProducts: [],
    womenProducts: [],
    shopping: [],
    productDetail: {}
  },
  mutations: {
    [SET_ALL_PRODUCTS](state, products) {
      state.allProducts = products;
    },
    [SET_PRODUCT_DETAIL](state, product) {
      state.productDetail = product;
    }
  },
  actions: {
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
      console.log('type',id, type)
      if (type === 'children') {
        console.log('children!!!')
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
