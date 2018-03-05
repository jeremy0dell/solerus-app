import { compose, lifecycle, withState } from 'recompose'
import axios from 'axios'
import assign from 'lodash/assign'

import {
  ITEM_INDEX,
  PRODUCT_INDEX,
} from '../routes'

// In the detailed view, the info we have is THE URL
// We need to find the item from the DB with the URL (if it is in the users ownership)
// The info from the DB (and not the ownership array) should handle the transfers

export const DetailedHOC = compose(
  withState('details', 'updateDetails', {}),
  lifecycle({
    componentDidMount() {
      const { location, user, updateDetails } = this.props

      const { pathname } = location
      const itemId = pathname.split('/')[2]

      user.ownership.includes(itemId) && axios.get(`/api${ITEM_INDEX}/${itemId}`) // eslint-disable-line
      .then((res) => {
        updateDetails(res.data)

        return axios.get(`/api${PRODUCT_INDEX}/${res.data.product}`)
      })
      .then(res => updateDetails(assign(this.props.details, { product: res.data })))
    },
  }),
)
