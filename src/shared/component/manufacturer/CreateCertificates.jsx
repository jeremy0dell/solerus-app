import React from 'react'
import { compose } from 'recompose'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import body from '../styles/ManufacturerStyles/BodyStyles'

import { formData, getProducts, createCertificates } from '../../util/form'


const CreateCertificates = ({ user, form, handleChange, handleProductDropdown, products }) => (console.log(form, products), // eslint-disable-line
  <div>
    <div style={body.button}>Create Solerus Certificates</div>
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

    <div>
      <div>Product Serial Numbers seperated by commas</div>
      <textarea cols="30" rows="4" name="serialNumbers" value={form.details} onChange={handleChange} />
    </div>

    <div // eslint-disable-line
      style={body.button}
      // I need serialNumbers, products.list[form.product]
      onClick={() => {
        const itemObj = {
          product: products.list[form.product],
          serialNumbers: form.serialNumbers.split(',').map(el => el.trim()),
        }

        createCertificates(itemObj)
        .then(console.log)
      }}
    >
      Submit Product
    </div>
  </div>)

export default compose(
  formData({ product: 0, serialNumbers: '' }),
  getProducts,
)(CreateCertificates)
