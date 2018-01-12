import React from 'react'
// import { APP_NAME } from '../config'
import styles from './styles/FooterStyles'

const Footer = () =>
  <div>
    <hr />
    <footer style={styles.container}>
      <div style={{ display: 'flex' }}>
        <img
          style={{ height: 45, width: 45, marginRight: 25 }}
          src="/static/images/solerus-logo.png"
          alt="Solerus logo"
        />
        <p>© Solerus 2018</p>
      </div>
      <p>contact@Solerus.io</p>
    </footer>
  </div>

export default Footer
