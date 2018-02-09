import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import LandingPage from './component/page/landing'
import Login from './component/auth/login'
import ManufacturerLogin from './component/auth/manufacturer'
import ManufacturerDashboard from './component/manufacturer/'
import SignUp from './component/auth/signup'
import Dashboard from './component/dashboard'
import Detailed from './component/detailed'
import Footer from './component/footer'
import NotFoundPage from './component/page/not-found'
import CreateProduct from './component/manufacturer/Create/CreateProduct'


import { APP_NAME } from './config'

import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  DETAIL_PAGE_ROUTE,
} from './routes'

import {
  MANUFACTURER_LOGIN_ROUTE,
  MANUFACTURER_CREATE_PRODUCT,
  MANUFACTURER_INDEX,
} from './manufacturerRoutes'

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <div style={{ minHeight: 'calc(100vh - 95px)', backgroundColor: '#F6F6F6' }}>
      {/* This is for anchoring the footer to the bootom of the page */}
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <LandingPage />} />

        <Route exact path={SIGNUP_PAGE_ROUTE} render={() => <SignUp />} />
        <Route exact path={LOGIN_PAGE_ROUTE} render={() => <Login />} />

        <Route exact path={DASHBOARD_PAGE_ROUTE} render={() => <Dashboard />} />
        <Route exact path={DETAIL_PAGE_ROUTE} render={() => <Detailed />} />

        <Route exact path={MANUFACTURER_LOGIN_ROUTE} render={() => <ManufacturerLogin />} />

        <Route path={MANUFACTURER_INDEX} render={() => <ManufacturerDashboard />} />

        <Route path={MANUFACTURER_CREATE_PRODUCT} render={() => <CreateProduct />} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </div>

export default App
