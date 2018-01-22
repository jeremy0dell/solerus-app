import React from 'react'
import SearchBar from 'material-ui-search-bar'
import AddProductModal from './AddProductModal'

import styles from '../styles/DashboardStyles/NavStyles'

const Nav = ({ user }) =>
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
        <div style={styles.add}>
          <button
            style={styles.addButton}
            data-toggle="modal"
            data-target="#addProductModal"
          > Add Product </button>
        </div>
        <div style={styles.account}>Account</div>
        <AddProductModal user={user}/>
      </div>
    </div>
  </div>

export default Nav
