import React from 'react'

import TopBar from './TopBar'
import Inventory from './Inventory'
import styles from '../styles/DashboardStyles/BodyStyles'

const Body = ({ user }) =>
  <div className="container" style={styles.bodyStyle}>
    <TopBar user={user} />
    <Inventory
      user={user}
      // items={items.sort((a, b) => {
      //   if (a._id < b._id) {
      //     return -1
      //   }
      //   if (a._id > b._id) {
      //     return 1
      //   }
      //   return 0
      // })}
    />
  </div>

export default Body
