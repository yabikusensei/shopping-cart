import Layout from './components/layout/layout'
import Products from './components/products/products'
import ProductsDetail from './components/detail/detail'
const routeProducts = {
  path: '/products',
  component: Layout,
  children: [
    {
      path: '',
      name: 'products',
      component: Products,
      props: { type: 'all' }
    },
    {
      path: 'men',
      name: 'men',
      component: Products,
      props: { type: 'men' }
    },
    {
      path: 'women',
      name: 'women',
      component: Products,
      props: { type: 'women' }
    },
    {
      path: 'children',
      name: 'children',
      component: Products,
      props: { type: 'children' }
    },
    {
      path: ':category/:id',
      name: 'detail',
      component: ProductsDetail
    }
  ]
}

export default routeProducts


