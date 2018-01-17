import React from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'

const DashboardContainer = ({ user }) => <Dashboard user={user} />

export default connect(state => ({ user: state.authentication.user }))(DashboardContainer)
