import React from 'react'
import keys from 'lodash/keys'

const toRender = prop => [
  { 'Serial Number': prop.cora_id },
  { 'Manufacturer': prop.product.retailer},
  { 'Item Summary': prop.product.description },
  { 'Solerus ID': prop.serial },
]

const ItemInfo = ({ item }) =>
  <div>
    {
      toRender(item).map(item =>
        <div key={keys(item)[0]}>
          <div style={{ fontWeight: 700, marginTop: '5%' }}>{keys(item)[0]}</div>
          <div style={{ fontWeight: 200 }}>{item[keys(item)[0]]}</div>
        </div>)
    }
  </div>

export default ItemInfo
