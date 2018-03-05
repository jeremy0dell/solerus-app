import React from 'react'

import TopBar from './TopBar'
import Inventory from './Inventory'
import styles from '../styles/DashboardStyles/BodyStyles'

const Body = ({ user, items }) =>
  <div className="container" style={styles.bodyStyle}>
    <TopBar user={user} />
    <Inventory
      user={user}
      items={items}
    />
  </div>

export default Body
