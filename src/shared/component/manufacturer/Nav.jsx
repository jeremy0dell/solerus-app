import React from 'react'

import styles from '../styles/ManufacturerStyles/NavStyles'

const Nav = () =>
  <div style={styles.body}>
    <img
      style={styles.logo}
      src="/static/images/LogoHeaderNoIcon.png"
      alt="Solerus logo"
    />
    <div style={styles.title}>Retailer Dashboard</div>
  </div>

export default Nav
