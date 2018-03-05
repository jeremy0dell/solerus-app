import express from 'express'
import mongoose from 'mongoose'

import User from '../../model/user'
import Item from '../../model/item'

import {
  MANUFACTURER_CERTIFICATES_CREATED,
  MANUFACTURER_USERS_WITH,
  MANUFACTURER_ITEMS_WITH,
} from '../../../shared/manufacturerRoutes'

const router = express.Router()

router.post(MANUFACTURER_CERTIFICATES_CREATED, (req, res, next) => {
  Item.find({ product: { $in: req.body.map(prod => mongoose.Types.ObjectId(prod)) } })
  .then((items) => {
    if (items) {
      console.log('items found are', items)
      res.json(items)
      return
    }
    res.sendStatus(404)
  })
  .catch(next)
})

router.post(MANUFACTURER_USERS_WITH, (req, res, next) => {
  const { product } = req.body

  console.log('called with', product)

  User.find({ ownership: { $elemMatch: { product: mongoose.Types.ObjectId(product) } } })
  .then((users) => {
    if (users) {
      res.json(users)
      return
    }
    res.sendStatus(404)
  })
  .catch(next)
})

router.post(MANUFACTURER_ITEMS_WITH, (req, res, next) => {
  const { product } = req.body

  console.log('called with', product)

  Item
    .find({ product: mongoose.Types.ObjectId(product) })
    .then((items) => {
      if (items) {
        res.json(items)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
