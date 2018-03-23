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
        products.map(prod =>
          <MenuItem
            key={prod._id}
            value={prod}
            primaryText={prod.name}
          />)
      }
    </DropDownMenu>
  </div>

export default Dropdowns
