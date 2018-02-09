import React from 'react'

import styles from '../../styles/AnalyticsStyles'

const TopBar = ({ user, certificates }) =>
  <div style={styles.topContainer}>
    <div>
      <div>Certificates Created</div>
      <div style={styles.displayText}>{certificates.length}</div>
    </div>
    <div>
      <div>Certificates Issued</div>
      <div style={styles.displayText}>{certificates.length - user.ownership.length}</div>
    </div>
    <div>
      <div>Certificates in Inventory</div>
      <div style={styles.displayText}>{user.ownership.length}</div>
    </div>
  </div>

export default TopBar
