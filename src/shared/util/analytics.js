import { compose, withState, withHandlers, lifecycle } from 'recompose'
import axios from 'axios'
import concat from 'lodash/concat'

import {
  MANUFACTURER_CERTIFICATES_CREATED,
  MANUFACTURER_USERS_WITH,
  MANUFACTURER_PRODUCTS_WITH,
  MANUFACTURER_ITEMS_WITH,
} from '../manufacturerRoutes'

import { ITEM_INDEX } from '../routes'

export const getItems = compose(
  withState('items', 'updateItems', { list: [] }),
  withHandlers({
    setItems:
    props =>
    (items) => {
      props.updateItems({ list: items })
    },
  }),
  lifecycle({
    componentDidMount() {
      const { setItems, product } = this.props

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
      // axios.post(`/manu${MANUFACTURER_USERS_WITH}`, { item })
      // .then(res => res.data.forEach(user => setUsersData(user._id, user)))
      // .catch(console.log)
    },
  }),
)

const getUsersAndItems = (userObj) => {
  const assocUsers = userObj.data
  const assocItems = concat(...userObj.data.map(u => u.matchedItems))

  return { assocUsers, assocItems }
}

export const getUsersForProduct = initialValues => compose(
  withState('productState', 'updateProductState', initialValues),
  withHandlers({
    setProductAnalytics:
    props =>
    analytics =>
    props.updateProductState({ ...props.productState, ...getUsersAndItems(analytics) }),
  }),
  lifecycle({
    componentDidMount() {
      const { product, user, setProductAnalytics } = this.props

      axios.post(`/manu${MANUFACTURER_USERS_WITH}`, { product, user })
      .then(res => setProductAnalytics(res))
      .catch(console.log)
    },
  }),
)

export const getAnalytics = initialValues => compose(
  withState('analytics', 'updateAnalytics', initialValues),
  withHandlers({
    setData:
    props =>
    (name, value) => props.updateAnalytics({ ...props.analytics, [name]: value }),
    setAnalyticsProduct:
    props =>
    (target, index, value) => {
      const { user } = props

      if (value === null) {
        props.updateAnalytics({
          ...initialValues,
          certificates: props.analytics.certificates,
          products: props.analytics.products,
          product: value,
        })
        return
      }

      axios.post(`/manu${MANUFACTURER_USERS_WITH}`, { product: value, user })
      .then(res => props.updateAnalytics({
        ...props.analytics,
        ...getUsersAndItems(res),
        product: value,
        item: null,
      }))
    },
    setAnalyticsItem:
    props =>
    (target, index, value) => props.updateAnalytics({ ...props.analytics, item: value }),
  }),
  lifecycle({
    componentDidMount() {
      const { user, setData } = this.props
      const { productLines } = user

      Promise.all([
        MANUFACTURER_PRODUCTS_WITH,
        MANUFACTURER_CERTIFICATES_CREATED,
      ].map(route => axios.post(`/manu${route}`, productLines)))
      .then((res) => {
        const state = ['products', 'certificates']
        res.forEach((arr, i) => { setData(state[i], res[i].data) })
      })
    },
  }),
)
