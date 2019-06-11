import Layout from './components/layout/layout'

import routeCheckout from '../checkout/router'
import routeConfirmPurchase from '../confirm-purchase/router'
import routeProducts from '../products/router'

const routeLayout = {
  path: '/',
  component: Layout,
  children: [
    routeCheckout,
    routeProducts,
    routeConfirmPurchase,
  ]
}

export {
  routeLayout
}
