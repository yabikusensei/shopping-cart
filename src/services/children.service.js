import { Service } from './service';

class ChildrenService extends Service {
  getAllProducts() {
    return this.request({
      url: `children`
    })
  }
}

export {
  ChildrenService
}

