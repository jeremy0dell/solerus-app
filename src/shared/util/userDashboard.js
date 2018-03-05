import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'
import assign from 'lodash/assign'

import {
  ITEM_INDEX,
  PRODUCT_INDEX,
} from '../routes'
// From the dashboard we need to be able to
//  RENDER ITEMS FROM THE USERS OWNERSHIP ARRAY

export const DashboardHOC = compose(
  withState('items', 'updateItems', []),
  lifecycle({
    componentDidMount() {
      const { user, updateItems } = this.props
      const { ownership } = user
      console.log('hi', updateItems)

      Promise.all(ownership.map(id => axios.get(`/api${ITEM_INDEX}/${id}`)))
      .then((res) => {
        updateItems(res.map(itm => itm.data))

        return Promise.all(res.map(itm => axios.get(`/api${PRODUCT_INDEX}/${itm.data.product}`)))
      })
      .then((res) => {
        const products = res.map(prod => prod.data)

        updateItems(this.props.items.map((item, i) => assign(item, { product: products[i] })))
      })
    },
  }),
)
