import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

// const ItemsMenu = ({ item, items, setAnalyticsItem }) => {
//   return (
//     <DropDownMenu
//       value={item}
//       onChange={(event, index, value) => {
//         console.log('value is', value)
//         setAnalyticsItem(event, index, value)
//       }}
//     >
//       <MenuItem value={null} primaryText="None" />
//       {
//         items.list.map(item =>
//           <MenuItem
//             key={item._id}
//             value={item._id}
//             primaryText={item.serial}
//           />)
//       }
//     </DropDownMenu>
//   )
// }
//
// const WithItems = getItems(ItemsMenu)

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
    {/*
        {product !== null && <WithItems
          item={item}
          products={products}
          product={product}
          setAnalyticsItem={setAnalyticsItem}
        />} */}
    {/*
    <DropDownMenu
      value={item}
      onChange={(event, index, value) => {
        console.log('value is', value)
        setAnalyticsItem(event, index, value)
      }}
    >
      {console.log('items is', items)}
      <MenuItem value={null} primaryText="None" />
      {
        items.list.map(item =>
          <MenuItem
            key={item._id}
            value={item._id}
            primaryText={item.serial}
          />)
      }
    </DropDownMenu> */}
  </div>

export default Dropdowns
