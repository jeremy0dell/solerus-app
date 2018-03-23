import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import HistoryItem from './History'

const Product = ({ assocUsers, assocItems, item, setAnalyticsItem }) =>
  <div style={{ display: 'flex' }}>
    <div>
      <b> Current Owners List </b>
      <hr />
      {assocUsers.length &&
        assocUsers.map(usr =>
          <div key={usr.full_name}>
            <div><b>{usr.full_name}</b></div>
            {usr.matchedItems
            .map(item =>
              <div key={item.serial}>
                Serial #: {item.serial}
              </div>)}
          </div>)}
    </div>
    <DropDownMenu
      style={{ marginLeft: 30 }}
      value={item}
      onChange={setAnalyticsItem}
    >
      <MenuItem value={null} primaryText="None" />
      {assocItems.filter(itm => itm.history.length)
      .map(item =>
        <MenuItem
          key={item._id}
          value={item}
          primaryText={item.serial}
        />)}
    </DropDownMenu>
    <div>
      {item && item.history.map(x => <HistoryItem key={x} item={x} />)}
    </div>
  </div>

export default Product
