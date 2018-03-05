import React from 'react'

import Card from './Card'

const Inventory = ({ user, items }) =>
  <div className="row justify-content-between">
    {console.log('Inventory items are', user, items)}
    {items.length && items.map(item => <Card key={item._id} item={item} />)}
    {/* { user && user.ownership.map(item => <Card key={item._id} item={item} />) } */}
  </div>

export default Inventory
