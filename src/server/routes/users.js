import express from 'express'
import bcrypt from 'bcrypt'

import User from '../model/user'

import {
  // USERS_INDEX,
  // USERS_SHOW,
  USERS_CREATE,
  // USERS_UPDATE,
  // USERS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.post(USERS_CREATE, (req, res, next) => {
  const { full_name, email, password } = req.body
  console.log('I made', { full_name, email, password: bcrypt.hashSync(password, 10) })
  const user = new User({ full_name, email, password: bcrypt.hashSync(password, 10) })

  user
    .save()
    .then((newUser) => {
      res.status(201).json(newUser)
    })
    .catch(next)
})

export default router
