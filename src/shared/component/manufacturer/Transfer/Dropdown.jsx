import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

// Select product
const Dropdown = ({ form, products, handleProductDropdown }) =>
  <div>
    {console.log('products is', products, 'form is', form)}
    This is Dropdown
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
  </div>

export default Dropdown
