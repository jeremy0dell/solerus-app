import React from 'react'
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom'
// import { compose } from 'recompose'

import { formData, uploadDocument } from '../../../util/form'
import body from '../../styles/ManufacturerStyles/BodyStyles'
import styles from '../../styles/ManufacturerStyles/CreateStyles'

const Button = () =>
  <Link to="/manufacturer">
    <button style={styles.arrowButton}>←</button>
  </Link>

const CreateProduct = ({ user, form, handleChange, handleUpload }) => (console.log(user, form), // eslint-disable-line
  <div>
  <Button />
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  <div style={styles.boxShadow}>
    <h5 style={{ align: 'center' }}> Create Solerus Product Line </h5>
      
    <input name="name" value={form.name} onChange={handleChange} placeholder="Product Line Name" style={{width: '70%', marginTop: '10px'}}/>
      
    <textarea
      cols="32"
      rows="4"
      name="details"
      placeholder="Product Description and Details"
      value={form.details}
      onChange={handleChange}
      style={{marginTop: '10px'}}
    />
    
      <Dropzone
        style={styles.dropzone}
        onDrop={handleUpload}
      >
        Drop or input product photo
      </Dropzone>
      <div style={{align: 'center', fontSize: '.7em'}}>We recommend a square image of your product on a white background</div>

    <div // eslint-disable-line
      style={body.createProd}
      onClick={() => {
        const uploadObj = {
          name: form.name,
          retailer: user.name,
          description: form.details,
        }

        console.log(uploadObj)
        uploadDocument(form.file, uploadObj)
      }
    }
    >
    </div>
  </div>
  </div>
  </div>)


export default formData({ name: '', details: '', file: null })(CreateProduct)
