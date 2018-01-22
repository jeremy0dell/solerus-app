// @flow

import {
  populateUser,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  // LOGIN_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    console.log('got', HOME_PAGE_ROUTE, 'sending', 'res.send(renderApp(req.url, loginPage()))')
    res.send(renderApp(req.url, populateUser(req.user)))
  })

  app.get(DASHBOARD_PAGE_ROUTE, (req, res) => {
    console.log('got', DASHBOARD_PAGE_ROUTE, 'sending', req.user, req.body)
    res.send(renderApp(req.url, populateUser(req.user)))
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
