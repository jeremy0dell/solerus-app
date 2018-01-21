import React from 'react'

const TopBar = ({ user }) =>
  <div className="row justify-content-between">
    <p>My Inventory ({user && user.ownership.length})</p>
    <div style={{ width: '300px' }} className="row">
      
    </div>
  </div>

export default TopBar
