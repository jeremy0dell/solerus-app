import React from 'react'

const TopBar = ({ user }) =>
  <div className="row justify-content-between">
    <p>My Inventory ({user && user.ownership.length})</p>
    <div style={{ width: 300 }} className="row justify-content-between">
      <div>
        View → List | Grid
      </div>
      <div>
        Filter
      </div>
    </div>
  </div>

export default TopBar
