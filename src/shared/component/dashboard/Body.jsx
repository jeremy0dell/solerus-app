import React from 'react'

import TopBar from './TopBar'
import Inventory from './Inventory'

const Body = ({ user, items }) =>
  <div className="container">
    <TopBar user={user} />
    I AM BODY
    <Inventory user={user} items={items} />
  </div>

export default Body
