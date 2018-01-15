import express from 'express'
import assign from 'lodash/assign'

import User from '../model/user'
import Token from '../model/token'

import { USERS_CONFIRMATION } from '../../shared/routes'
import { LOGIN_PAGE_ROUTE } from '../../shared/routes'

const router = express.Router()

router.get(USERS_CONFIRMATION, (req, res, next) => {
  console.log('got it!!')
  Token
    .findOne({ token: req.params.token })
    .then((token) => {
      if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' })
      return User.findOne({ _id: token._userId })
    })
    .then((user) => {
      if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' })
      if (user.isVerified) return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' })
      assign(user, { isVerified: true })
      return user.save()
    })
    .then(res.redirect(301, LOGIN_PAGE_ROUTE))
    //.then(res.status(200).send('The account has been verified. Please log in.'))
    .catch(next)
})

export default router
