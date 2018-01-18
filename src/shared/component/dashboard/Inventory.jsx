import React from 'react'

import Card from './Card'

const Inventory = ({ items }) =>
  <div className="row justify-content-between">
    { items && items.map((item, idx) =>
      <Card key={idx} item={item} />, // eslint-disable-line
    ) }
  </div>

export default Inventory
