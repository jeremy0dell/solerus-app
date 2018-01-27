import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import {
  MANUFACTURER_INDEX,
  MANUFACTURER_CREATE_PAGE,
} from '../../../shared/manufacturerRoutes'

import Nav from './Nav'
import Dashboard from './Dashboard'
import CreatePage from './CreatePage'

const ManufacturerContainer = ({ user }) =>
  <div>
    <Nav />

    <Switch>
      <Route exact path={MANUFACTURER_INDEX} render={() => <Dashboard user={user} />} />
      <Route exact path={MANUFACTURER_CREATE_PAGE} render={() => <CreatePage user={user} />} />
    </Switch>
  </div>

export default connect(state => ({ user: state.authentication.user }))(ManufacturerContainer)
