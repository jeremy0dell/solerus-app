import React from 'react'

import Card from './Card'

const Inventory = ({ products }) =>
  <div className="row">
    { products && products.map((item, idx) =>
      <Card key={idx} item={item} />, // eslint-disable-line
    ) }
  </div>

export default Inventory
