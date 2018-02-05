import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import {
  MANUFACTURER_INDEX,
  MANUFACTURER_CREATE_CERTIFICATES,
  MANUFACTURER_CREATE_PRODUCT,
  MANUFACTURER_TRANSFER_PAGE,
} from '../../../shared/manufacturerRoutes'

import Nav from './Nav'
import Dashboard from './Dashboard'
import CreateCertificates from './Create/CreateCertificates'
import CreateProduct from './Create/CreateProduct'
import TransferPage from './Transfer/'

const ManufacturerContainer = ({ user }) =>
  <div>
    <Nav />
    {/* eslint-disable */}
    <Switch>
      <Route exact path={MANUFACTURER_INDEX} render={() => <Dashboard user={user} />} />
      <Route exact path={MANUFACTURER_CREATE_CERTIFICATES}
        render={() => <CreateCertificates user={user} />} />
      <Route exact path={MANUFACTURER_CREATE_PRODUCT}
        render={() => <CreateProduct user={user} />} />
      <Route exact path={MANUFACTURER_TRANSFER_PAGE} render={() => <TransferPage user={user} />} />
    </Switch>
    {/* eslint-enable */}
  </div>

export default connect(state => ({ user: state.authentication.user }))(ManufacturerContainer)
