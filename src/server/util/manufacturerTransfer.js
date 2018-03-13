import { remove, keyBy } from 'lodash'

import User from '../model/user'
import Manufacturer from '../model/manufacturer'
import Item from '../model/item'
import Transfer from '../model/transfer'

require('babel-polyfill')

const types = { User, Manufacturer }

/*
* Takes an itemId (string), transerer email (string), and transferee email (string)
*
*/
const transferItem = async (transferObj) => {
  // console.log('thing', transferObj)

  // find sender and receiver
  // grab associated items from DB
  // add transfers to the items
  // give the items (with the new transfers to the receiver)

  const { email, items, user, type } = transferObj

  // const itemsArr = items.map(itm => itm._id)
  const itemsObj = keyBy(items, '_id')

  const [sender, receiver] = await Promise.all([
    Manufacturer.findOne({ email: user.email }),
    types[type].findOne({ email }),
  ])
  // v This is error handling v
  const foundItems = sender.ownership
  .filter(ownedItem => itemsObj[ownedItem] !== undefined)

  console.log('found?', foundItems)
  if (items.length !== foundItems.length) {
    throw new Error('User doesn\'t own correct items')
  }
  // ^ This is error handling ^
  const databaseItems = await Promise.all(items.map(itm => Item.findOne({ _id: itm._id })))

  console.log(databaseItems)

  const transfersArr = []

  databaseItems.forEach((item) => {
    const transfer = new Transfer({
      transferType: type === 'User' ? 'M->U' : 'M->M',
      transferer: sender._id,
      recipient: receiver._id,
    })

    item.history.push(transfer)
    item.markModified('history')
    transfersArr.push(transfer)
  })

  console.log(databaseItems)

  const orphanItems = remove(sender.ownership, itm => itemsObj[itm] !== undefined)
  console.log(orphanItems)
  // // make sure that items exist in sender
  // // if not, return error
  //
  // // get the items from the actual DB
  //
  // // console.log('orphans are', orphanItems)
  //
  // const transfers = orphanItems.map(() => new Transfer({
  //   transferer: sender._id,
  //   recipient: receiver._id,
  // }))
  //
  for (let i = 0; i < orphanItems.length; i++) { // eslint-disable-line
    // orphanItems[i].history.push(transfers[i]._id)
    receiver.ownership.push(orphanItems[i])
  }

  console.log(sender, receiver, databaseItems, transfersArr)
  // // pop item in sender, create transfer, push transfer to item
  sender.markModified('ownership')
  receiver.markModified('ownership')
  return Promise.all([
    sender.save(),
    receiver.save(),
    ...databaseItems.map(x => x.save()),
    ...transfersArr.map(x => x.save()),
  ])
}

export default transferItem
