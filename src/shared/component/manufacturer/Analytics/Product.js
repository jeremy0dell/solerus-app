import React from 'react'
import { values, flatten } from 'lodash'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import { getUsersForProduct } from '../../../util/analytics'

import HistoryItem from './History'

/* eslint-disable */
const Product = ({ product, usersWith, itemWith, setItemData }) =>
  <div style={{ display: 'flex' }}>
    <div>
      {
        values(usersWith).map(usr =>
          <div key={usr._id}>
            <div>Customer: {usr.full_name}</div>
            {
              usr.ownership.filter(itm => product === itm.product)
              .map(item =>
                <div key={item.serial}>
                  Serial #: {item.serial}
                </div>)
            }
          </div>)
      }
    </div>
    <DropDownMenu
      style={{ marginLeft: 30 }}
      value={itemWith}
      onChange={setItemData}
    >
      <MenuItem value={null} primaryText="None" />
      {
        flatten(
          values(usersWith)
          .map(u => u.ownership
          .filter(i => i.product === product)) // eslint-disable-line
        ).map(item =>
          <MenuItem
            key={item._id}
            value={item}
            primaryText={item.serial}
          />)
      }
    </DropDownMenu>
    <div>
      {itemWith && itemWith.history.map(x => <HistoryItem key={x} item={x} />)}
    </div>
  </div>

export default getUsersForProduct(Product)
