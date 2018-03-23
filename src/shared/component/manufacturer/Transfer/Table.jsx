import React from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const ItemsTable = ({ transferState, onChange }) =>
  <div>
    <Table
      multiSelectable
      onCellClick={onChange}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn tooltip="Item Serial Number">Serial Number</TableHeaderColumn>
          <TableHeaderColumn tooltip="Solerus Unique ID">Solerus ID</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody deselectOnClickaway={false} >
        {
          transferState.currProduct && transferState.currProduct.items.map((item, idx) =>
            <TableRow
              key={item.cora_id}
              selected={!!transferState.itemsSelected[idx]}
            >
              <TableRowColumn>{item.serial}</TableRowColumn>
              <TableRowColumn>{item.cora_id}</TableRowColumn>
            </TableRow>)
        }
      </TableBody>
    </Table>
  </div>

export default ItemsTable
