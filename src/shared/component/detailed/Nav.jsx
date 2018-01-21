import React from 'react'

import styles from '../styles/DashboardStyles/NavStyles'

const Nav = () =>
  <div className="container-fluid">
    <div
      className="row justify-content-between"
      style={{ marginRight: '10px' }}
    >

      <img
        style={styles.logo}
        src="/static/images/LogoHeaderNoIcon.png"
        alt="Solerus logo"
      />

      <div className="row">
        <div style={styles.account}>Account</div>
      </div>
    </div>
  </div>

export default Nav
