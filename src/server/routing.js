// @flow

import axios from 'axios'

import {
  populateUser,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
} from '../shared/routes'

import {
  MANUFACTURER_INDEX,
  MANUFACTURER_LOGIN_ROUTE,
  MANUFACTURER_DASHBOARD_ROUTE,
} from '../shared/manufacturerRoutes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    console.log('got', HOME_PAGE_ROUTE, 'sending', 'res.send(renderApp(req.url, loginPage()))')
    res.send(renderApp(req.url, populateUser(req.user)))
  })

  app.get(DASHBOARD_PAGE_ROUTE, (req, res) => {
    console.log('got', DASHBOARD_PAGE_ROUTE, 'sending', req.user._id.toString())
    axios.get(`http://localhost:8000/api/users/${req.user._id.toString()}`)
    .then((response) => {
      console.log('response is', response.data)
      res.send(renderApp(req.url, populateUser(response.data)))
    })
  })

  app.get(MANUFACTURER_LOGIN_ROUTE, (req, res) => {
    console.log('got1', MANUFACTURER_DASHBOARD_ROUTE, 'sending', req.user)
    // axios.get(`http://localhost:8000/manu/users/${req.user._id.toString()}`)
    // .then((response) => {
    //   console.log('response is', response.data)
    //   res.send(renderApp(req.url, populateUser(response.data)))
    // })
    res.send(renderApp(req.url, populateUser(req.user)))
  })

  app.get(MANUFACTURER_DASHBOARD_ROUTE, (req, res) => {
    console.log('got2', MANUFACTURER_DASHBOARD_ROUTE, 'sending', req.user._id.toString())
    axios.get(`http://localhost:8000/manu/${MANUFACTURER_INDEX}/${req.user._id.toString()}`)
    .then((response) => {
      console.log('response is', response.data)
      res.send(renderApp(req.url, populateUser(response.data)))
    })
  })

  app.get(`${MANUFACTURER_INDEX}*`, (req, res) => {
    console.log('got3', MANUFACTURER_DASHBOARD_ROUTE, 'sending', req.user._id.toString())
    axios.get(`http://localhost:8000/manu/${MANUFACTURER_INDEX}/${req.user._id.toString()}`)
    .then((response) => {
      console.log('response is', response.data)
      res.send(renderApp(req.url, populateUser(response.data)))
    })
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
