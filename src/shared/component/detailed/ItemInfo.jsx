import React from 'react'
import keys from 'lodash/keys'

const toRender = prop => [
  { 'Cora ID': prop.cora_id },
  { 'Item Summary': prop.product.description },
  { 'Serial Number': prop.serial },
]

const ItemInfo = ({ item }) =>
  <div>
    {
      toRender(item).map(item =>
        <div key={keys(item)[0]}>
          <div style={{ fontWeight: 700 }}>{keys(item)[0]}</div>
          <div style={{ fontWeight: 200 }}>{item[keys(item)[0]]}</div>
        </div>)
    }
  </div>

export default ItemInfo
