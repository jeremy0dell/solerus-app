import { remove, includes } from 'lodash'

import User from '../model/user'
import Item from '../model/item'

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

    const found = remove(toGiveRes.ownership,
    itm => itm._id.toString() === toTransferRes._id.toString())

    toGiveRes.markModified('ownership')

    toGetRes.ownership.push(found[0])
    toGetRes.markModified('ownership')
    console.log("looking for", toGiveRes, toGetRes )
    return Promise.all([toGiveRes.save(), toGetRes.save()])
  })
}

export default transferItem
