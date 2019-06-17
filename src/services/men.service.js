import { Service } from './service';

class MenService extends Service {
  getAllProducts() {
    return this.request({
      url: `men`
    })
  }

  getProduct(id) {
    return this.request({
      url: `men/${id}`
    })
  }
}

export {
  MenService
}

