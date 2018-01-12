import express from 'express'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

import User from '../model/user'
import Token from '../model/token'

import {
  // USERS_INDEX,
  // USERS_SHOW,
  USERS_CREATE,
  TOKEN_RESEND,
  // USERS_CONFIRMATION,
  // USERS_DELETE,
} from '../../shared/routes'

const options = { auth: { api_key: process.env.SENDGRID_API_KEY } }
const mailer = nodemailer.createTransport(sgTransport(options))


const message = (req, token, user) => ({
  from: 'no-reply@yourwebapplication.com',
  to: user.email,
  subject: 'Account Verification Token',
  text: `Hello ${user.full_name},\n\nPlease verify your account by clicking the link:\nhttp://${req.headers.host}/verify/confirmation/${token.token}.\n`,
})

const router = express.Router()

router.post(USERS_CREATE, (req, res, next) => {
  const { full_name, email, password } = req.body

  const user = new User({ full_name, email, password: bcrypt.hashSync(password, 10) })

  user
    .save()
    .then((newUser) => {
      const token = new Token({ _userId: newUser._id, token: crypto.randomBytes(16).toString('hex') })

      return Promise.all([token.save(), newUser])
    })
    .then((data) => {
      const mailOptions = message(req, data[0], data[1])

      mailer.sendMail(mailOptions, (err, response) => {
        if (err) {
          res.send(err)
        } else {
          res.send(response)
        }
      })
    })
    .catch(next)
})

router.post(TOKEN_RESEND, (req, res, next) => {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      const token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') })

      return Promise.all([token.save(), user])
    })
    .then((data) => {
      const mailOptions = message(req, data[0], data[1])

      mailer.sendMail(mailOptions, (err, response) => {
        if (err) {
          res.send(err)
        } else {
          res.send(response)
        }
      })
    })
    .catch(next)
})

export default router
