import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/DetailedStyles'

const Button = () =>
  <Link to="/dashboard">
    <button style={styles.arrowButton}>←</button>
  </Link>

const ItemView = ({ item }) =>
  <div style={styles.viewBody}>
    {console.log('in VIEW itm is', item)}
    <Button />
    <div>
      <div style={styles.itemName}>Your {item.product.name}</div>
      <div style={styles.card}>
        <img style={styles.itemImg} src={item.product.image} alt="Your item" />
      </div>
    </div>
  </div>

export default ItemView
