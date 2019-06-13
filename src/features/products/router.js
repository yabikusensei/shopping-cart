import Layout from './components/layout/layout'
import Products from './components/products/products'
import ProductsDetail from './components/detail/detail'
const routeProducts = {
  path: '/products',
  component: Layout,
  children: [
    {
      path: '',
      component: Products,
      meta: {
        breadcrumb: [
          { name: 'Hello World' }
        ]
      }
    },
    {
      path: ':id',
      component: ProductsDetail
    }
  ]
}

export default routeProducts


