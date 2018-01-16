import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Dashboard = ({ state }) => //eslint-disable-line
  <div>
    THIS IS THE DASHBOARD FROM
    {console.log('dashboard says state is', state)}
  </div>


Dashboard.PropTypes = {
  state: PropTypes.object.isRequired,
}

export default connect(state => ({ state }))(Dashboard)
