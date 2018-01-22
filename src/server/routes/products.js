import express from 'express'
import mongoose from 'mongoose'

import Product from '../model/product'
import { PRODUCT_SHOW } from '../../shared/routes'

const router = express.Router()

router.get(PRODUCT_SHOW, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Product.findById(id)
  .then((product) => {
    if (product) {
      res.json(product)
      return
    }
    res.sendStatus(404)
  })
  .catch(next)
})

export default router
