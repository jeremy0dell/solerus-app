import React from 'react'

import styles from '../styles/DashboardStyles/BodyStyles'

const Card = ({ item }) =>
  <div className="xs-12 sm-6 md-4 lg-2" style={styles.card}>
    <img style={styles.cardImg} src={item.image} alt={item.name} />
    <div>{item.name}</div>
  </div>

export default Card
