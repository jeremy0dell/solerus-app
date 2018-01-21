import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/DashboardStyles/BodyStyles'

const Card = ({ item }) =>
  <Link to={`/dashboard/${item._id}`}>
    <div className="xs-12 sm-6 md-3 lg-4" style={styles.card}>
      <img style={styles.cardImg} src={item.product.image} alt={item.product.name} />
      <div style={styles.cardText}>{item.product.name}</div>
    </div>
  </Link>

export default Card
