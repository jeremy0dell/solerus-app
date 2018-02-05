import express from 'express'
import mongoose from 'mongoose'

import Transfer from '../model/transfer'
import { TRANSFER_SHOW } from '../../shared/routes'

const router = express.Router()

router.get(TRANSFER_SHOW, (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Transfer.findById(id)
  .then((transfer) => {
    if (transfer) {
      res.json(transfer)
      return
    }
    res.sendStatus(404)
  })
  .catch(next)
})

export default router
