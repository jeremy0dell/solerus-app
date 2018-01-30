import express from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt'
import validator from 'validator'
import omit from 'lodash/omit'

import User from '../model/user'

import {
  AUTH_USER,
  // AUTH_ME,
  // AUTH_LOGOUT,
} from '../../shared/routes'

const LocalStrategy = passportLocal.Strategy

passport.use('user', new LocalStrategy(
  { usernameField: 'email' }, // we are using email as our username
  (email, password, done) => {
    const emailSan = validator.normalizeEmail(email)
    User.findOne({ 'email': emailSan }, (err, user) => { // eslint-disable-line
      if (err) {
        console.log('got err') // eslint-disable-line
        return done(err)
      }
      if (!user) {
        console.log('got !user') // eslint-disable-line
        return done(null, false)
      }
      if (!bcrypt.compareSync(password, user.password)) {
        console.log('got !bcrypt.compareSync(user.password , password)') // eslint-disable-line
        return done(null, false)
      }
      if (!user.isVerified) {
        console.log('got !user.isVerified') // eslint-disable-line
        return done(null, false)
      }
      return done(null, user)
    })
  },
))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

const router = express.Router()

router.post(AUTH_USER,
  passport.authenticate('user', { failureRedirect: '/login' }),
  (req, res) => {
    const { user } = req
    console.log('after auth req.user is', req.user)
    res.json(omit(user.toObject(), 'password'))
  },
)

export default router
