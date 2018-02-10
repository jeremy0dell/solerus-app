import { remove, keyBy } from 'lodash'

import User from '../model/user'
import Manufacturer from '../model/manufacturer'
import Transfer from '../model/transfer'

require('babel-polyfill')

const types = { User, Manufacturer }

/*
* Takes an itemId (string), transerer email (string), and transferee email (string)
*
*/
const transferItem = async (transferObj) => {
  const { email, items, user, type } = transferObj

  const itemsObj = keyBy(items, 'cora_id')

  const [sender, receiver] = await Promise.all([
    Manufacturer.findOne({ email: user.email }),
    types[type].findOne({ email }),
  ])
  // console.log(sender, receiver)
  // make sure that items exist in sender
  // if not, return error
  const foundItems = sender.ownership
  .filter(ownedItem => itemsObj[ownedItem.cora_id] !== undefined)

  if (items.length !== foundItems.length) {
    // console.log(sender.ownership, itemsObj)
    throw new Error('User doesn\'t own correct items')
  }

  // get the items from the actual DB

  const orphanItems = remove(sender.ownership, itm => itemsObj[itm.cora_id] !== undefined)
  // console.log('orphans are', orphanItems)

  const transfers = orphanItems.map(() => new Transfer({
    transferer: sender._id,
    recipient: receiver._id,
  }))

  for (let i = 0; i < orphanItems.length; i++) { // eslint-disable-line
    orphanItems[i].history.push(transfers[i]._id)
    receiver.ownership.push(orphanItems[i])
  }
  // pop item in sender, create transfer, push transfer to item
  sender.markModified('ownership')
  receiver.markModified('ownership')
  return Promise.all([
    sender.save(),
    receiver.save(),
    ...transfers.map(x => x.save()),
    ...orphanItems.map(x => x.save()),
  ])
}

export default transferItem
