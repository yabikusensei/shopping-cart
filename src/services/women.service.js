import { Service } from './service';

class WomenService extends Service {
  getAllProducts() {
    return this.request({
      url: `women`
    })
  }
}

export {
  WomenService
}

