import React from 'react'

import TopBar from './TopBar'
import Inventory from './Inventory'

const Body = ({ user, products }) =>
  <div className="container">
    <TopBar user={user} />
    I AM BODY
    <Inventory products={products} />
  </div>

export default Body
