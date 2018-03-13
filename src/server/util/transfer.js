import { remove, includes } from 'lodash'

import User from '../model/user'
import Item from '../model/item'
import Transfer from '../model/transfer'

/*
* Takes an itemId (string), transerer email (string), and transferee email (string)
*
*/
const transferItem = (item, transferer, transferee) => {
  const toGive = User.findOne({ email: transferer })
  const toGet = User.findOne({ email: transferee })
  const toTransfer = Item.findOne({ _id: item })

  return Promise.all([toGive, toGet, toTransfer])
  .then(([toGiveRes, toGetRes, toTransferRes]) => {
    if (includes([toGiveRes, toGetRes, toTransferRes], null)) {
      return new Error('The email entered is not valid')
    }

    const itemTransfer = new Transfer({
      transferType: 'U->U',
      transferer: toGiveRes._id,
      recipient: toGetRes._id,
    })

    toTransferRes.history.push(itemTransfer._id)
    toTransferRes.markModified('history')

    const found = remove(toGiveRes.ownership,
    itm => itm.toString() === toTransferRes._id.toString())

    toGiveRes.markModified('ownership')

    toGetRes.ownership.push(found[0])
    toGetRes.markModified('ownership')
    return Promise.all([toGiveRes, toGetRes, toTransferRes, itemTransfer].map(x => x.save()))
  })
  .then(console.log)
  .catch(console.log)
}

export default transferItem
