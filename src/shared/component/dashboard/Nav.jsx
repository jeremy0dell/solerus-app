import React from 'react'

import SearchBar from 'material-ui-search-bar'

const Nav = () =>
  <div className="container">
    <div className="row">
      <img src="/static/images/header-logo.png" alt="Solerus logo" />
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
      />
      <div>Account</div>
    </div>
  </div>

export default Nav
