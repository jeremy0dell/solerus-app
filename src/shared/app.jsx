// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import LandingPage from './component/page/landing'
import Login from './component/auth/login'
import SignUp from './component/auth/signup'
import Dashboard from './component/dashboard'
import Detailed from './component/detailed'
// import HomePage from './component/page/home'
import Footer from './component/footer'
// import Nav from './component/nav'
import NotFoundPage from './component/page/not-found'
import { APP_NAME } from './config'
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  DETAIL_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <LandingPage />} />
      <Route exact path={SIGNUP_PAGE_ROUTE} render={() => <SignUp />} />
      <Route exact path={LOGIN_PAGE_ROUTE} render={() => <Login />} />
      <Route exact path={DASHBOARD_PAGE_ROUTE} render={() => <Dashboard />} />
      <Route exact path={DETAIL_PAGE_ROUTE} render={() => <Detailed />} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>

export default App
