import express from 'express'
import mongoose from 'mongoose'

import Item from '../model/item'
import { ITEM_SHOW } from '../../shared/routes'

const router = express.Router()

router.get(ITEM_SHOW, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Item.findById(id)
  .then((item) => {
    console.log('id is', id, 'item is', item)
    if (item) {
      res.json(item)
      return
    }
    res.sendStatus(404)
  })
  .catch(next)
})

export default router
