import React from 'react'

import Nav from './Nav'
import Body from './Body'

const Detailed = ({ item, email }) => // eslint-disable-line
  <div style={{ margin: '0px 0px 0px 0px', backgroundColor: '#F6F6F6' }}>
    <Nav />
    <Body item={item} email={email} />
  </div>

export default Detailed
