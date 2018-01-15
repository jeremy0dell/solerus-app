import express from 'express'
import passport from 'passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt'
import validator from 'validator'

import User from '../model/user'

import {
  AUTH_USER,
  // AUTH_ME,
  // AUTH_LOGOUT,
} from '../../shared/routes'

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy(
  { usernameField: 'email' }, // we are using email as our username
  (email, password, done) => {
    const emailSan = validator.normalizeEmail(email)
    User.findOne({ 'email': emailSan }, (err, user) => {
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

router.get('/hello/:token', (req, res) => {
  console.log(req.params, req.query, req.body)
  if (req.user) {
    // logged in
    res.send(`logged in and user is ${req.user}`)
  } else {
    // not logged in
    res.send('could not find user')
  }
})

router.post(AUTH_USER,
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('body is', req.body, req.user) // eslint-disable-line
    res.send(`user ${req.user.full_name} is signed in!`)
  },
)

export default router
