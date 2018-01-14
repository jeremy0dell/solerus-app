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
  from: 'no-reply@solerus.com',
  to: user.email,
  subject: 'Solerus Email Verification',
  html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;">
  <tr>
    <td align="center" valign="top">
      <!--[if (gte mso 9)|(IE)]>
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" valign="top" width="750">
            <![endif]-->
            <table cellpadding="0" cellspacing="0" border="0" width="750" class="table750"
            style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;">
              <tr>
                <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
                <td align="center" valign="top" style="background: #ffffff;">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                    <tr>
                      <td align="right" valign="top">
                        <div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                    <tr>
                      <td align="center" valign="top">
                        <div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div>
                        <a href="#"
                        style="display: block; max-width: 192px;">
                          <img src="https://i.imgur.com/CKDGW0h.png" alt="HireClub" width="192"
                          border="0" style="display: block; width: 192px;" />
                        </a>
                        <div class="top_pad2" style="height: 48px; line-height: 48px; font-size: 46px;">&nbsp;</div>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                    <tr>
                      <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">
                              <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">Confirm Your Email</span>
                           </font>

                        <div style="height: 21px; line-height: 21px; font-size: 19px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                              <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                              Hey ${user.full_name},
                              </span>
                           </font>

                        <div style="height: 6px; line-height: 6px; font-size: 4px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                              <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                                Thank you for joining Solerus. To finish signing up and begin protecting your valuables, please confirm your email. 
                              </span>
                           </font>

                        <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                        <table class="mob_btn" cellpadding="0" cellspacing="0" border="0"
                        style="background: #04BEFE; border-radius: 4px;">
                          <tr>
                            <td align="center" valign="top">
                              <a href="http://${req.headers.host}/verify/confirmation/${token.token}"
                              target="_blank" style="display: block; border: 1px solid #04BEFE; border-radius: 4px; padding: 19px 27px; font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;"> <font face="'Source Sans Pro', sans-serif" color="#ffffff" style="font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">
               <span style="font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">Confirm Email</span>
            </font>

                              </a>
                            </td>
                          </tr>
                        </table>
                        <div style="height: 90px; line-height: 90px; font-size: 88px;">&nbsp;</div>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;">
                    <tr>
                      <td align="left" valign="top">
                        <div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                    <tr>
                      <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#7f7f7f" style="font-size: 17px; line-height: 23px;">
                              <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 17px; line-height: 23px;">Button not working? Try pasting this link into your browser:\nhttp://${req.headers.host}/verify/confirmation/${token.token}</span>
                           </font>

                        <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                    <tbody>
                      <tr>
                        <td align="center" valign="top">
                          <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div>
                          <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                                  </table>

                                  <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#868686" style="font-size: 15px; line-height: 20px;">
                        <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #868686; font-size: 15px; line-height: 20px;">
                           Solerus
                           <br>
                           28 College Street · Hanover, NH · 03755</span>
                     </font>

                                  <div style="height: 4px; line-height: 4px; font-size: 2px;">&nbsp;</div>
                                  <div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div>`,
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
