import React from 'react'
import { Link } from 'react-router-dom'


import styles from '../styles/ManufacturerStyles/BodyStyles'

import {
  MANUFACTURER_TRANSFER_PAGE,
  MANUFACTURER_CREATE_PAGE,
} from '../../../shared/manufacturerRoutes'
// Two alligned buttons
// "Create Solerus Certificates" and "Transfer Solerus Certificates"

const Button = ({ text, to }) =>
  <Link to={to}><div style={styles.button}>{text}</div></Link>

const Body = () =>
  <div style={styles.container}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        to={MANUFACTURER_CREATE_PAGE}
        text="Create Solerus Certificates"
      />
      <Button
        to={MANUFACTURER_TRANSFER_PAGE}
        text="Transfer Solerus Certificates"
      />
    </div>
    <div>
      <Button
        to="/"
        text="Inventory Analytics"
      />
    </div>
  </div>

export default Body
