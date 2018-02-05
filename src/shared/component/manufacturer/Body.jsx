import React from 'react'
import { Link } from 'react-router-dom'


import styles from '../styles/ManufacturerStyles/BodyStyles'

import {
  MANUFACTURER_TRANSFER_PAGE,
  MANUFACTURER_CREATE_CERTIFICATES,
  MANUFACTURER_CREATE_PRODUCT,
} from '../../../shared/manufacturerRoutes'
// Two alligned buttons
// "Create Solerus Certificates" and "Transfer Solerus Certificates"

const Button = ({ text, to }) =>
  <Link to={to}><div style={styles.button}>{text}</div></Link>

const routes = [
  ['Transfer Solerus Certificates', MANUFACTURER_TRANSFER_PAGE],
  ['Create Solerus Certificates', MANUFACTURER_CREATE_CERTIFICATES],
  ['Create Solerus Products', MANUFACTURER_CREATE_PRODUCT],
  ['Inventory Analytics', '/'],
]

const Body = () =>
  <div style={styles.container}>
    {
      routes.map(route =>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            to={route[1]}
            text={route[0]}
          />
        </div>)
    }
  </div>

export default Body
