import { compose, lifecycle, withState, withHandlers } from 'recompose'
import axios from 'axios'

import {
  PRODUCT_INDEX,
  TRANSFER_INDEX,
  USERS_INDEX,
} from '../routes'


export const getTransfers = compose(
  withState('transfers', 'updateTransfers', { lastTransfer: {} }),
  withHandlers({
    setTransfers:
    props =>
    (transfer) => {
      console.log('transfer is', transfer, 'props.transfers is', props.transfers)
      props.updateTransfers({ lastTransfer: transfer })
    },
  }),
  lifecycle({
    componentDidMount() {
      const { item, setTransfers } = this.props
      const { history } = item
      const lastTransfer = history.slice(-1)
      console.log('item', item, 'history', history)
      axios.get(`/api${TRANSFER_INDEX}/${lastTransfer}`)
      .then(res => setTransfers(res.data))
    },
  }),
)

export const getUser = compose(
  withState('user0', 'updateUser', {}),
  withHandlers({
    setUser:
    props =>
    user =>
    props.updateUser({ ...user }),
  }),
  lifecycle({
    componentDidMount() {
      const { user, setUser } = this.props

      console.log('USER IS ', user)

      axios.get(`/api${USERS_INDEX}/${user._id}`)
      .then(res => setUser(res))
      .then(() => { console.log('user has been set') })
    },
  }),
)

// export const getInventory = initial compose(
//   withState('inventory', 'updateInventory', )
// )

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
