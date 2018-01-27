import express from 'express'

import Manufacturer from '../../model/manufacturer'

import { MANUFACTURER_SHOW } from '../../../shared/manufacturerRoutes'

const router = express.Router()

router.get(MANUFACTURER_SHOW, (req, res, next) => {
  console.log(req.body, req.params)

  Manufacturer
    .findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next)
})

export default router
