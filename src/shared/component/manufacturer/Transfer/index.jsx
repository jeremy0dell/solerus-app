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
import { TransferHOC } from '../../../util/manuTransfer'
import { MANUFACTURER_TRANSFER } from '../../../manufacturerRoutes'

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const ManufacturerTransfer = ({
  user,
  form,
  history,
  updateState,
  handleChange,
  transferState,
  setCurrProduct,
  handleCheckEvent,
}) =>
  <div>
    <Button />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={styles.boxShadowTransfer}>
        <h5> Transfer Solerus Certificates </h5>
        <Dropdown transferState={transferState} setCurrProduct={setCurrProduct} />
        <Table
          transferState={transferState}
          onChange={handleCheckEvent}
        />
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
  TransferHOC({ inventory: {}, currProduct: '', itemsSelected: [] }),
  connect(state => ({ user: state.authentication.user }), { removeItemFromState }),
)(ManufacturerTransfer)
