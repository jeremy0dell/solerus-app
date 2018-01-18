import React from 'react'

import Nav from './Nav'
import Body from './Body'

const Dashboard = ({ user, items }) => // eslint-disable-line
  <div style={{ margin: '30px 30px 0px 30px' }}>
    <Nav />
    <Body user={user} items={items} />
  </div>

export default Dashboard
