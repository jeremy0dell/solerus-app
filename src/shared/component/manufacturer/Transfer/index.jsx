import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
// import includes from 'lodash/includes'

import Dropdown from './Dropdown'
import Table from './Table'
import Input from './EmailInput'

import styles from '../../styles/ManufacturerStyles/CreateStyles'
import body from '../../styles/ManufacturerStyles/BodyStyles'

import { removeItemFromState } from '../../../action/authentication'
import { formData } from '../../../util/form'
// import { getProducts } from '../../../util/getters'
import { TransferHOC } from '../../../util/manuTransfer'
import { MANUFACTURER_TRANSFER } from '../../../manufacturerRoutes'

/*
  inventory: {
    'Rolex Name': {
      _id: 1234j2h34j1h342jh,
      items: [ Array of items ]
    },
  }
  currProduct: 'Product Name',
  itemsSelected: []

  When a new product is selected, the app updates, itemsSelected resets
*/


// get all items in ownership
// find all productIDs associated with items
//   ex: if nordstrom has 2 rolexes and 3 LV bags, we will have [rolexID, LVbagID]
//   get names of those products (so we can filter by product)
//   zip those arrays together in object like { rolexID: 'rolex name', ...etc }
//

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const ManufacturerTransfer = ({
  user,
  form,
  updateState,
  handleChange,
  transferState,
  setCurrProduct,
  handleCheckEvent,
}) =>
  <div>
    <div>Hi</div>
    {console.log('HIHI', transferState)}
    <Button />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={styles.boxShadowTransfer}>
        <h5> Transfer Solerus Certificates </h5>
        <Dropdown transferState={transferState} setCurrProduct={setCurrProduct} />
        <Table
          transferState={transferState}
          onChange={handleCheckEvent}
        />
        {/* <Table
          user={user}
          selectedProduct={form.product}
          itemsSelected={form.itemsSelected}
          products={products.list}
          handleCheckboxEvent={handleCheckboxEvent}
        /> */}
        <Input
          form={form}
          updateState={updateState}
          handleChange={handleChange}
        />
        <div // eslint-disable-line
          style={body.transferForm}
          onClick={() => {
            const { currProduct, itemsSelected } = transferState
            const { items } = currProduct
            // console.log(currProduct.items)
            // console.log(currProduct.items.filter((itm, idx) => itemsSelected[idx]))
            const submitObj = {
              user,
              type: form.recipientType,
              items: items.filter((itm, idx) => itemsSelected[idx]),
              email: form.email,
            }
            console.log(submitObj)
            axios.post(`/manu${MANUFACTURER_TRANSFER}`, submitObj)
            .then((res) => {
              res.data.items.forEach(itm => removeItemFromState(itm._id))
              history.push('/manufacturer')
            })
          }}
        />
      </div>
    </div>
  </div>

export default compose(
  withRouter,
  formData({ recipientType: 'Manufacturer', email: '' }),
  // getProducts,
  TransferHOC({ inventory: {}, currProduct: '', itemsSelected: [] }),
  connect(state => ({ user: state.authentication.user }), { removeItemFromState }),
)(ManufacturerTransfer)
