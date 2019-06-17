import { Service } from './service';

class ChildrenService extends Service {
  getAllProducts() {
    return this.request({
      url: `children`
    })
  }

  getProduct(id) {
    console.log('id', id)
    return this.request({
      url: `children/${id}`
    })
  }
}

export {
  ChildrenService
}

