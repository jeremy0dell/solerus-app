import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/DetailedStyles'

const Button = () =>
  <Link to="/dashboard">
    <button style={styles.arrowButton}>←</button>
  </Link>

const ItemView = ({ item }) =>
  <div style={styles.viewBody}>
    <Button />
    <div>
      <div>Your {item.product.name}</div>
      <img style={styles.itemImg} src={item.product.image} alt="Your item" />
    </div>
  </div>

export default ItemView
