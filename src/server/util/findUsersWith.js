import { cloneDeep, pick, assign } from 'lodash'

import Item from '../model/item'
import User from '../model/user'

require('babel-polyfill')

const findUsersWith = async (product, user) => {
  const { _id } = product
  const { ownership } = user

  const itemsNotOwned = await Item.find({ $and: [{ product: _id }, { _id: { $nin: ownership } }] })
  const usersWithItems = await User.find({ ownership: { $in: itemsNotOwned.map(i => i._id) } })

  const clonedUsers = cloneDeep(usersWithItems)
                      .map(u => assign(
                      pick(u, ['ownership', 'full_name']), { matchedItems: [] }))

  const usersPlusItems = itemsNotOwned.reduce((st, nx) => {
    st.forEach((usr) => {
      const ownership = usr.ownership.map(i => i.toString())
      const id = nx._id.toString()
      if (ownership.includes(id)) {
        usr.matchedItems.push(nx)
      }
    })
    return st
  }, clonedUsers)

  return Promise.all(usersPlusItems)
}

export default findUsersWith
