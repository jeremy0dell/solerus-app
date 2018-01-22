import React from 'react'

import Nav from './Nav'
import Body from './Body'

const Dashboard = ({ user, items }) => // eslint-disable-line
  <div style={{ margin: '0px 0px 0px 0px', backgroundColor: '#F6F6F6' }}>
    <Nav user={user} />
    <Body user={user} items={items} />
  </div>

export default Dashboard
