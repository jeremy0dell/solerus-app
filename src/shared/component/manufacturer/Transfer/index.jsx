import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import includes from 'lodash/includes'

import Dropdown from './Dropdown'
import Table from './Table'
import Input from './EmailInput'

import styles from '../../styles/ManufacturerStyles/CreateStyles'
import body from '../../styles/ManufacturerStyles/BodyStyles'

import { removeItemFromState } from '../../../action/authentication'
import { formData } from '../../../util/form'
import { getProducts } from '../../../util/getters'
import { MANUFACTURER_TRANSFER } from '../../../manufacturerRoutes'
import { Link } from 'react-router-dom'
// pass product s and changeProduct into dropdown
// pass product and items and changeform into table
// pass email and changeform into input
// probably keep the actual button in this component for simplicity

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const ManufacturerTransfer = ({
  user,
  history,
  form,
  updateState,
  products,
  handleChange,
  handleProductDropdown,
  handleCheckboxEvent,
  removeItemFromState,
}) =>
  <div>
    <Button />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <div style={styles.boxShadowTransfer}>
    <h5> Transfer Solerus Certificates </h5>
    <Dropdown form={form} products={products} handleProductDropdown={handleProductDropdown} />
    <Table
      user={user}
      selectedProduct={form.product}
      itemsSelected={form.itemsSelected}
      products={products.list}
      handleCheckboxEvent={handleCheckboxEvent}
    />
    <Input
      form={form}
      updateState={updateState}
      handleChange={handleChange}
    />
    <div // eslint-disable-line
      style={body.transferForm}
      onClick={() => {
        const submitObj = {
          user,
          type: form.recipientType,
          items: user.ownership.filter(item => item.product === products.list[form.product]._id)
          .filter((item, idx) => includes(form.itemsSelected, idx)),
          email: form.email,
        }
        axios.post(`/manu${MANUFACTURER_TRANSFER}`, submitObj)
        .then((res) => {
          res.data.items.forEach(itm => removeItemFromState(itm._id))
          history.push('/manufacturer')
        })
      }}
    >
  </div>
  </div>
  </div>
  </div>

export default compose(
  withRouter,
  formData({ product: 0, recipientType: 'Manufacturer', email: '', itemsSelected: [] }),
  getProducts,
  connect(null, { removeItemFromState }),
)(ManufacturerTransfer)
