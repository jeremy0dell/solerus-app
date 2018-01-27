import React from 'react'

import styles from '../styles/ManufacturerStyles/CreateStyles'

import CreateCertificates from './CreateCertificates'
import CreateProduct from './CreateProduct'

const CreatePage = () =>
  <div style={styles.container}>
    <CreateCertificates />
    <CreateProduct />
  </div>

export default CreatePage
