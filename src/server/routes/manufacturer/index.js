import express from 'express'
import multer from 'multer'

import Manufacturer from '../../model/manufacturer'

import createProductLine from '../../util/createProductLine'

import {
  MANUFACTURER_SHOW,
  MANUFACTURER_UPLOAD,
} from '../../../shared/manufacturerRoutes'

const upload = multer({ dest: './public/uploads/' })

const router = express.Router()

router.get(MANUFACTURER_SHOW, (req, res, next) => {
  console.log(req.body, req.params)

  Manufacturer
    .findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next)
})


/* files looks like:
[ { fieldname: 'file',
    originalname: 'picture.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: './public/uploads/',
    filename: '2dd58ba07d2a7730ba3671fb02eef143',
    path: 'public/uploads/2dd58ba07d2a7730ba3671fb02eef143',
    size: 55772 } ]
*/
router.post(MANUFACTURER_UPLOAD, upload.any(), (req, res) => {
  console.log('req.body is', req.body)
  const { name, retailer, description } = req.body

  const productObj = { image: req.files[0].path, retailer, name, description }

  createProductLine(productObj)

  res.send('You uploaded')
})

export default router
