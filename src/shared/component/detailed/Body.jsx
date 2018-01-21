import React from 'react'

import ItemView from './ItemView'
import ItemInfo from './ItemInfo'
// import TopBar from './TopBar'
// import Inventory from './Inventory'
import styles from '../styles/DetailedStyles'

// <Picture with Title />
// <div>
//   <Descriptions>
//   <Buttons />
// </div>

const Button = ({ text }) => <button style={styles.transferButton}>{text}</button>

const Body = ({ item }) =>
  <div style={styles.body}>
    <ItemView item={item} />
    <div>
      <ItemInfo item={item} />
      <div style={{ display: 'flex' }}>
        <Button text="Transfer" />
        <Button text="Report Lost" />
      </div>
    </div>
  </div>

export default Body
