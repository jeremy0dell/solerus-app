import React from 'react'

const TopBar = ({ user }) =>
  <div className="row justify-content-between">
    <p>My Inventory ({user && user.ownership.length})</p>
    <div style={{ width: '300px' }} className="row">
      <p style={{ marginLeft: 'auto', marginRight: '0' }}> View → List | Grid </p>
    </div>
  </div>

export default TopBar
