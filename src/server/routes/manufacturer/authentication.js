import express from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt'
import validator from 'validator'
import omit from 'lodash/omit'

import Manufacturer from '../../model/manufacturer'

import {
  AUTH_MANUFACTURER,
} from '../../../shared/manufacturerRoutes'

const LocalStrategy = passportLocal.Strategy

passport.use('manufacturer', new LocalStrategy(
  { usernameField: 'email' }, // we are using email as our username
  (email, password, done) => {
    const emailSan = validator.normalizeEmail(email)
    Manufacturer.findOne({ 'email': emailSan }, (err, user) => { // eslint-disable-line
      if (err) {
        console.log('got err') // eslint-disable-line
        return done(err)
      }
      if (!user) {
        console.log('got !user AHHHAH', email, password) // eslint-disable-line
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
  console.log('RErealize user')
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log('DErealize user')
  done(null, user)
})

const router = express.Router()

router.post(AUTH_MANUFACTURER, // /authManufacturer
  passport.authenticate('manufacturer', { failureRedirect: '/login' }),
  (req, res) => {
    const { user } = req
    res.json(omit(user.toObject(), 'password'))
  },
)

export default router
