import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const Dropdowns = ({ products, setAnalyticsProduct, product }) =>
  <div>
    <DropDownMenu
      value={product}
      onChange={(event, index, value) => setAnalyticsProduct(event, index, value)}
    >
      <MenuItem value={null} primaryText="None" />
      {
        products.list.map(product =>
          <MenuItem
            key={product._id}
            value={product._id}
            primaryText={product.name}
          />)
      }
    </DropDownMenu>
  </div>

export default Dropdowns
