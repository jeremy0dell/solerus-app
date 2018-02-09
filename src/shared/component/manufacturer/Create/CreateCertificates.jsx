import React from 'react'
import { compose } from 'recompose'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

import body from '../../styles/ManufacturerStyles/BodyStyles'
import styles from '../../styles/ManufacturerStyles/CreateStyles'

import { formData, createCertificates } from '../../../util/form'
import { getProducts } from '../../../util/getters'


const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const CreateCertificates = ({ user, form, handleChange, handleProductDropdown, products }) => (console.log(form, products), // eslint-disable-line
  <div>
    <Button />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={styles.boxShadow}>
        <h5 style={{ align: 'center' }}> Create Solerus Certificates </h5>
        <p style={{ marginBottom: '0px' }}> Select Product Line </p>
        <DropDownMenu name="product" value={form.product} onChange={handleProductDropdown}>
          {
          products.list.map((product, idx) => <MenuItem
            key={idx} // eslint-disable-line
            value={idx}
            name="product"
            primaryText={product.name}
          />)
          }
        </DropDownMenu>
        <textarea cols="32" rows="4" name="serialNumbers" value={form.details} onChange={handleChange} placeholder="Please enter product serial numbers seperated by commas" />
        <div // eslint-disable-line
          style={body.createCert}
          // I need serialNumbers, products.list[form.product]
          onClick={() => {
            const itemObj = {
              product: products.list[form.product],
              serialNumbers: form.serialNumbers.split(',').map(el => el.trim()),
            }
            createCertificates(itemObj)
            .then(console.log)
          }}
        />
      </div>
    </div>
  </div>)

export default compose(
  formData({ product: 0, serialNumbers: '' }),
  getProducts,
)(CreateCertificates)
