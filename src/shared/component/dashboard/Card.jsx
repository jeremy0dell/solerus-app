import React from 'react'

import styles from '../styles/DashboardStyles/BodyStyles'

const Card = ({ item }) =>
  <div className="xs-12 sm-6 md-3 lg-4" style={styles.card}>
    <img style={styles.cardImg} src={item.product.image} alt={item.product.name} />
    <div style={styles.cardText}>{item.product.name}</div>
  </div>

export default Card
