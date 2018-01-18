import React from 'react'
import SearchBar from 'material-ui-search-bar'

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

      <SearchBar
        className="col-md-offset-5"
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={styles.searchBar}
      />
      <div className="row">
        <div style={styles.add}>Add Product</div>
        <div style={styles.account}>Account</div>
      </div>
    </div>
  </div>

export default Nav
