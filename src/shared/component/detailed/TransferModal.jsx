import React from 'react'
import { withState } from 'recompose'
import { connect } from 'react-redux'
import axios from 'axios'
import validator from 'validator'

import { removeItemFromState } from '../../action/authentication'
import { USERS_TRANSFER } from '../../routes'

const formState = withState('form', 'setForm', { email: '' })

const TransferModal = ({ form, setForm, email, id, removeItemFromState, history }) => (console.log(id, email, form.email), // eslint-disable-line
  <div className="modal fade" id="transferModal" tabIndex="-1" role="dialog" aria-labelledby="transferModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Transfer Solerus Title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: '10px' }}>To transfer this asset and title to another Solerus user, please enter their email below.</div>
          <div style={{ marginBottom: '10px' }}>All transfers are permanent, so please ensure you are transfering the correct product.</div>
          <input
            style={{ width: '80%' }}
            value={form.email}
            onChange={e => setForm({ email: e.target.value })}
          />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={() => {
              axios.post(`http://localhost:8000/api${USERS_TRANSFER}`, { item: id, transferer: email, transferee: validator.normalizeEmail(form.email) })
              .then(() => {
                history.push('/dashboard')
                removeItemFromState(id)
              })
              .catch(console.log)
            }}
          >Transfer</button>
        </div>
      </div>
    </div>
  </div>
)
export default connect(null, { removeItemFromState })(formState(TransferModal))
