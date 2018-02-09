import { compose, withState, withHandlers, lifecycle } from 'recompose'
import axios from 'axios'

import {
  MANUFACTURER_CERTIFICATES_CREATED,
  MANUFACTURER_USERS_WITH,
  MANUFACTURER_ITEMS_WITH,
} from '../manufacturerRoutes'

import { ITEM_INDEX } from '../routes'

export const getItems = compose(
  withState('items', 'updateItems', { list: [] }),
  withHandlers({
    setItems:
    props =>
    (items) => {
      console.log('ABCDE', items)
      props.updateItems({ list: items })
    },
  }),
  lifecycle({
    componentDidMount() {
      const { setItems, product } = this.props

      console.log(`/manu${MANUFACTURER_ITEMS_WITH}`, this.props)

      axios.post(`/manu${MANUFACTURER_ITEMS_WITH}`, { product })
      .then(res => setItems(res.data))
      // .then(console.log)
      .catch(console.log)

      // Promise.all(user.productLines.map(prod => axios.get(`/api${PRODUCT_INDEX}/${prod}`)))
      // .then((res) => {
      //   res.forEach((prod) => {
      //     setProduct(prod.data)
      //   })
      // })
    },
  }),
)


export const getHistoryForItem = compose(
  withState('itemWith', 'updateItemWith', {}),
  withHandlers({
    setItemHistory:
    props =>
    (id, value) =>
    props.updateItemWith({ ...props.usersWith, [id]: value }),
  }),
  lifecycle({
    componentDidMount() {
      const { item } = this.props

      axios.get(`/api${ITEM_INDEX}/${item}`)
      .then(console.log)

      // axios.post(`/manu${MANUFACTURER_USERS_WITH}`, { item })
      // .then(res => res.data.forEach(user => setUsersData(user._id, user)))
      // .catch(console.log)
    },
  }),
)

export const getUsersForProduct = compose(
  withState('usersWith', 'updateUsersWith', {}),
  withState('itemWith', 'updateItemWith', null),
  withHandlers({
    setUsersData:
    props =>
    (id, value) =>
    props.updateUsersWith({ ...props.usersWith, [id]: value }),
    setItemData:
    props =>
    (event, idx, value) => {
      props.updateItemWith(value)
      console.log('QWERQWERQWER', value, props)
    },
  }),
  lifecycle({
    componentDidMount() {
      const { product, setUsersData } = this.props

      axios.post(`/manu${MANUFACTURER_USERS_WITH}`, { product })
      .then(res => res.data.forEach(user => setUsersData(user._id, user)))
      .catch(console.log)
    },
  }),
)

export const getAnalytics = initialValues => compose( // { certificates: 0,  }
  withState('analytics', 'updateAnalytics', initialValues),
  withHandlers({
    setData:
    props =>
    (name, value) => props.updateAnalytics({ ...props.analytics, [name]: value }),
    setAnalyticsProduct:
    props =>
    (target, index, value) => props.updateAnalytics({ ...props.analytics, product: value }),
    setAnalyticsItem:
    props =>
    (target, index, value) => props.updateAnalytics({ ...props.analytics, item: value }),
  }),
  lifecycle({
    componentDidMount() {
      const { user, setData } = this.props
      const { productLines } = user

      axios.post(`/manu${MANUFACTURER_CERTIFICATES_CREATED}`, productLines)
      .then(res => setData('certificates', res.data))
      .catch(console.log)
    },
  }),
)
