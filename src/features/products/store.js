import {
  ChildrenService,
  WomenService,
  MenService
} from '../../services';

const childrenService = new ChildrenService();
const womenService = new WomenService();
const menService = new MenService();

const StoreProducts = {
  state: {
    allProducts: [],
    menProducts: [],
    womenProducts: [],
    shopping: []
  },
  mutations: {

  },
  actions: {
    getAllProducts({commit}) {
      childrenService()
      .getAllProducts()
      .then((response) => {
        console.log('response', response)
      })
    }
  },
  getters: {

  }
}

export {
  StoreProducts
}
