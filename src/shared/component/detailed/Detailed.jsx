import React from 'react'

import Nav from './Nav'
import Body from './Body'

const Detailed = ({ item, email, history, transfers }) => // eslint-disable-line
  <div style={{ margin: '0px 0px 0px 0px', backgroundColor: '#F6F6F6' }}>
    <Nav />
    {console.log('itm is', item)}
    {
      item.product &&
      typeof item.product === 'object' &&
      <Body item={item} email={email} history={history} />
    }
  </div>

export default Detailed
