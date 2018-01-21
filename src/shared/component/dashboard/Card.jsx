import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/DashboardStyles/BodyStyles'

const Card = ({ item }) =>
  <Link to={`/dashboard/${item._id}`} style={{textDecoration: 'none', color: 'black'}}>
    <div className="xs-12 sm-6 md-3 lg-4" style={styles.card}>
    	<div style={{height:'1px'}}> </div>
    	<div style={{height: '60%'}}> 
    		<img style={styles.cardImg} src={item.product.image} alt={item.product.name} />
    	</div>
      
      <div style={styles.cardText}>{item.product.name}</div>
    </div>
  </Link>

export default Card
