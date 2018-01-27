import React from 'react'

import styles from '../styles/ManufacturerStyles/CreateStyles'

import CreateCertificates from './CreateCertificates'
import CreateProduct from './CreateProduct'

const CreatePage = ({ user }) =>
  <div style={styles.container}>
    <CreateProduct user={user} />
    <CreateCertificates user={user} />
  </div>

export default CreatePage
