import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
// import axios from 'axios'
// import { assign, isObject } from 'lodash'

import { DashboardHOC } from '../../util/userDashboard'

import Dashboard from './Dashboard'
// import { PRODUCT_INDEX } from '../../routes'
const DashboardContainer = ({ user, items }) => <Dashboard user={user} items={items} />


// export default connect(state => ({ user: state.authentication.user }))(DashboardContainer)
export default compose(
  connect(state => ({ user: state.authentication.user })),
  DashboardHOC,
)(DashboardContainer)
