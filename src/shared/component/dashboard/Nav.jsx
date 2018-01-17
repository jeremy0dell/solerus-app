import React from 'react'
import SearchBar from 'material-ui-search-bar'

import styles from '../styles/DashboardStyles/NavStyles'

const Nav = () =>
  <div className="container-fluid">
    <div className="row justify-content-between">
      <img style={styles.logo} src="/static/images/header-logo.png" alt="Solerus logo" />
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={styles.searchBar}
      />
      <div style={styles.account}>Account</div>
    </div>
  </div>

export default Nav
