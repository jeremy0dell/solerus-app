import React from 'react'
import includes from 'lodash/includes'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

// material ui table with multi-select
// HOC that takes given product and searches current user for items of that product

const ItemsTable = ({ user, itemsSelected, selectedProduct, products, handleCheckboxEvent }) =>
  <div>
    {console.log('user is', user)}
    <Table
      multiSelectable
      onCellClick={handleCheckboxEvent}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn tooltip="Item Serial Number">Serial Number</TableHeaderColumn>
          <TableHeaderColumn tooltip="Solerus Unique ID">Solerus ID</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody deselectOnClickaway={false} >
        {
          user.productLines.length === products.length &&
          user.ownership.filter(item => item.product === products[selectedProduct]._id)
          .map((item, idx) =>
            <TableRow
              key={item.cora_id}
              selected={includes(itemsSelected, idx)}
            >
              <TableRowColumn>{item.serial}</TableRowColumn>
              <TableRowColumn>{item.cora_id}</TableRowColumn>
            </TableRow>,
          )
        }
      </TableBody>
    </Table>
  </div>

export default ItemsTable
