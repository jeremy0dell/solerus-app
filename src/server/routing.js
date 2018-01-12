// @flow

import {
  homePage,
  loginPage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloEndpointRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    console.log('got', HOME_PAGE_ROUTE, 'sending', 'res.send(renderApp(req.url, loginPage()))')
    res.send(renderApp(req.url, homePage()))
  })

  app.get(LOGIN_PAGE_ROUTE, (req, res) => {
    console.log('got', LOGIN_PAGE_ROUTE, 'sending loginPage():', loginPage())
    res.send(renderApp(req.url, loginPage()))
  })

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    helloPage()
      .then(
        plainPartialState => res.send(renderApp(req.url, plainPartialState)),
        // eslint-disable-next-line no-console
        err => console.error(err),
      )
  })

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()))
  })

  app.get(helloEndpointRoute(), (req, res) => {
    res.json(helloEndpoint(req.params.num))
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
