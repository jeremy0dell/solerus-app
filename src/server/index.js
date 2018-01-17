// @flow

import './dotenv'

/* eslint-disable import/first */

import compression from 'compression'
import express from 'express'
import session from 'express-session'
import { Server } from 'http'
import bodyParser from 'body-parser'
import passport from 'passport'
import favicon from 'serve-favicon'
import socketIO from 'socket.io'

import './db'

import authenticationRoute from './routes/authentication'
import usersRoute from './routes/users'
import verificationRoute from './routes/verify'
import productsRoute from './routes/products'
import routing from './routing'

import { WEB_PORT, STATIC_PATH, isProd } from '../shared/config'
import setUpSocket from './socket'

const app = express()
// flow-disable-next-line
const http = Server(app)
const io = socketIO(http)
setUpSocket(io)

app.use(bodyParser.json())
app.use(compression())
app.use(favicon('public/img/favicon.ico'))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'Solerus1234',
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use('/auth', authenticationRoute)
app.use('/verify', verificationRoute)
app.use('/api', usersRoute, productsRoute)
routing(app)

/* eslint-disable no-console,no-unused-expressions,no-unused-vars */
app.use((err, req, res, next) => {
  res.sendStatus(500)
})

http.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${String(WEB_PORT)} ${isProd ? '(production)' :
    '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
