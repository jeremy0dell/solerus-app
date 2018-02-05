import React from 'react'
import keys from 'lodash/keys'
import ReactTooltip from 'react-tooltip'

const solerusID = prop => [
  { 'Solerus ID': prop.cora_id },
]

const toRender = prop => [
  { Manufacturer: prop.product.retailer },
  { 'Item Summary': prop.product.description },
  { 'Serial Number': prop.serial },
  { 'Date Created': new Date(prop.dateCreated).toLocaleDateString().replace(/\//g, '-') },
]

const ItemInfo = ({ item, transfers }) =>

  <div>
    {console.log('transfers are', transfers)}
    {
      solerusID(item).map(item =>
        <div key={keys(item)[0]}>
          <div style={{ fontWeight: 700 }}>{keys(item)[0]}
            <a data-tip="React-tooltip">
              <img style={{ width: '3%', marginLeft: '5px' }} id="imgRight" src="/static/images/questionCircle.png" alt="" />
            </a>
          </div>
          <div style={{ fontWeight: 200 }}>{item[keys(item)[0]]}</div>
        </div>,
      )
    }
    {
      toRender(item).map(item =>
        <div key={keys(item)[0]}>
          <div style={{ fontWeight: 700, marginTop: '5%' }}>{keys(item)[0]}</div>
          <div style={{ fontWeight: 200 }}>{item[keys(item)[0]]}</div>
        </div>)
    }
    {transfers.transferDate && <div key={keys(item)[0]}>
      <div style={{ fontWeight: 700, marginTop: '5%' }}>Date Received</div>
      <div style={{ fontWeight: 200 }}>{new Date(transfers.transferDate).toLocaleDateString().replace(/\//g, '-')}</div>
    </div>}
    <ReactTooltip place="top" type="dark" effect="solid">
      <p>
        The Solerus ID corresponds to your product&apos;s unique ID on the blockchain. <br />
        This ID can&apos;t be duplicated or used by another product.
      </p>
    </ReactTooltip>
  </div>

export default ItemInfo
