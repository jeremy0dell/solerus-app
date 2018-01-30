import { compose, withState, withHandlers } from 'recompose'
import axios from 'axios'

import { MANUFACTURER_UPLOAD } from '../manufacturerRoutes'

/*
component method handleChange is a function that takes props, and returns a
function that takes an event (onChange React prop), which when executed
updates the form. handleUpload is similar, but with the file
*/
export const formData = initialValues => compose(
  withState('form', 'updateState', initialValues),
  withHandlers({
    handleChange:
    props =>
    event =>
    props.updateState({ ...props.form, [event.target.name]: event.target.value }),
    handleUpload:
    props =>
    files =>
    props.updateState({ ...props.form, file: files[0] }),
  }),
)

export const uploadDocument = (file, object) => {
  const data = new FormData()
  data.append('file', file)
  data.append('name', object.name)
  data.append('retailer', object.retailer)
  data.append('description', object.description)

  console.log('posting this', data)
  return axios.post(`http://localhost:8000/manu${MANUFACTURER_UPLOAD}`, data)
}
