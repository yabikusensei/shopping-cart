import { Service } from './service';

class ChildrenService extends Service {
  getAllProducts() {
    return this.request({
      url: `children`
    })
  }

  getProduct(id) {
    return this.request({
      url: `children/${id}`
    })
  }
}

export {
  ChildrenService
}

