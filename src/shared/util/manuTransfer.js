import { compose, lifecycle, withState, withHandlers } from 'recompose'
import axios from 'axios'
import { uniq, keyBy } from 'lodash'
// import assign from 'lodash/assign'
//
import {
  ITEM_INDEX,
  PRODUCT_INDEX,
} from '../routes'
/*
  inventory: {
    'Rolex Name': {
      _id: 1234j2h34j1h342jh,
      items: [ Array of items ]
    },
  }
  currProduct: 'Product Name',
  itemsSelected: []

  When a new product is selected, the app updates, itemsSelected resets
*/


export const TransferHOC = initialValues => compose(
  withState('transferState', 'updateTransferState', initialValues),
  withHandlers({
    setInventory:
    props =>
    inventory =>
    props.updateTransferState({ ...props.transferState, inventory }),
    setCurrProduct:
    props =>
    (event, idx, product) =>
    props.updateTransferState({
      ...props.transferState,
      currProduct: product,
      itemsSelected: new Array(product.items.length),
    }),
    handleCheckEvent:
    props =>
    (index) => {
      const selected = props.transferState.itemsSelected

      if (!selected[index]) {
        selected[index] = true
      } else {
        selected[index] = false
      }

      props.updateTransferState({ ...props.transferState, itemsSelected: selected })
    },
  }),
  lifecycle({
    componentDidMount() {
      const { user, setInventory } = this.props
      let itemList

      Promise.all(user.ownership.map(id => axios.get(`/api${ITEM_INDEX}/${id}`)))
      .then((items) => {
        itemList = items.map(itm => itm.data)
        const inventoryProds = uniq(itemList.map(itm => itm.product))
        return Promise.all(inventoryProds.map(prod => axios.get(`/api${PRODUCT_INDEX}/${prod}`)))
      })
      .then((prods) => {
        const products = prods.map(prod => prod.data)
        const prodsByKey = keyBy(products, '_id')

        const productsWithItems = itemList.reduce((obj, item) => {
          if (obj[item.product].items) {
            obj[item.product].items.push(item)
          } else {
            obj[item.product].items = [item] // eslint-disable-line
          }

          return obj
        }, prodsByKey)

        setInventory(productsWithItems)
      })
    },
  }),
)
