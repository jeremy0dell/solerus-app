import React from 'react'
import { TextField, DropDownMenu, MenuItem } from 'material-ui'


const Input = ({ form, handleChange, updateState }) =>
  <div>
    <div>Enter Registered Solerus Email Address of Recipient:</div>
    <TextField
      hintText="Solerus registered Email"
      floatingLabelText="Solerus registered Email"
      style={{ width: 500 }}
      name="email"
      value={form.email}
      onChange={handleChange}
    />
    <DropDownMenu
      value={form.recipientType}
      onChange={(event, idx, value) => updateState({ ...form, recipientType: value })}
      // onChange={(event, idx, value) => { console.log({ recipientType: value }) }}
    >
      <MenuItem value={'Manufacturer'} primaryText="Manufacturer" />
      <MenuItem value={'User'} primaryText="User" />
    </DropDownMenu>
  </div>

export default Input
