import React from 'react'
import Dropzone from 'react-dropzone'
// import { compose } from 'recompose'

import { formData } from '../util/form'
import body from '../styles/ManufacturerStyles/BodyStyles'
import styles from '../styles/ManufacturerStyles/CreateStyles'

const CreateProduct = ({ user, form, handleChange, handleUpload }) => (console.log(user, form), // eslint-disable-line
  <div>
    <div style={body.button}>Create Product Line</div>
    <div>
      Name:
      <span>
        <input name="name" value={form.name} onChange={handleChange} />
      </span>
    </div>
    <div>
      <div>Details:</div>
      <textarea cols="30" rows="4" name="details" value={form.details} onChange={handleChange} />
    </div>
    <div>
      <div>Upload image:</div>
      <Dropzone
        style={styles.dropzone}
        onDrop={handleUpload}
      >
        Drop or input product photo
      </Dropzone>
    </div>

    <div // eslint-disable-line
      style={body.button}
      onClick={() => { console.log({ form }) }}
    >
      Submit Product
    </div>
  </div>)


export default formData({ name: '', details: '', file: null })(CreateProduct)
