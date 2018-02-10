import React from 'react'
import { Link } from 'react-router-dom'


import styles from '../styles/ManufacturerStyles/BodyStyles'

import {
  MANUFACTURER_TRANSFER_PAGE,
  MANUFACTURER_ANALYTICS_PAGE,
  MANUFACTURER_CREATE_CERTIFICATES,
  MANUFACTURER_CREATE_PRODUCT,
} from '../../../shared/manufacturerRoutes'
// Two alligned buttons
// "Create Solerus Certificates" and "Transfer Solerus Certificates"

const routes = [
  ['Transfer Solerus Certificates', MANUFACTURER_TRANSFER_PAGE],
  ['Create Solerus Certificates', MANUFACTURER_CREATE_CERTIFICATES],
  ['Create Solerus Products', MANUFACTURER_CREATE_PRODUCT],
  ['Inventory Analytics', MANUFACTURER_ANALYTICS_PAGE],
]

const Body = () =>
  <div style={styles.container}>
    <div style={styles.boxShadow}>
      <Link to="/manufacturer/create-certificates">QWERQWER</Link>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={routes[2][1]} style={{ width: '100%' }}> <div style={styles.createProd} /></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={routes[1][1]} style={{ width: '100%' }}> <div style={styles.createCert} /></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={routes[0][1]} style={{ width: '100%' }}> <div style={styles.transfer} /></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={routes[3][1]} style={{ width: '100%' }}> <div style={styles.analytics} /></Link>
      </div>
    </div>
  </div>

export default Body
