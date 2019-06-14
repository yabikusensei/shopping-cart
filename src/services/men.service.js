import { Service } from './service';

class MenService extends Service {
  getAllProducts() {
    return this.request({
      url: `men`
    })
  }
}

export {
  MenService
}

