import { compose, lifecycle, withState, withHandlers } from 'recompose'
import axios from 'axios'

import { PRODUCT_INDEX } from '../routes'

export const getProducts = compose(
  withState('products', 'updateProducts', { list: [] }),
  withHandlers({
    setProduct:
    props =>
    product =>
    props.updateProducts({ list: [...props.products.list, product] }),
  }),
  lifecycle({
    componentDidMount() {
      const { user, setProduct } = this.props

      Promise.all(user.productLines.map(prod => axios.get(`/api${PRODUCT_INDEX}/${prod}`)))
      .then((res) => {
        res.forEach((prod) => {
          setProduct(prod.data)
        })
      })
    },
  }),
)
