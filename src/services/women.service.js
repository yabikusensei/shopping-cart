import { Service } from './service';

class WomenService extends Service {
  getAllProducts() {
    return this.request({
      url: `women`
    })
  }

  getProduct(id) {
    return this.request({
      url: `women/${id}`
    })
  }
}

export {
  WomenService
}

