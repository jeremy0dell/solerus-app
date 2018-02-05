import uuid from 'uuid/v4'

import Manufacturer from '../model/manufacturer'
import Product from '../model/product'
import Item from '../model/item'

const createCertificates = (productObj) => {
  const currManufacturer = Manufacturer.findOne({ name: productObj.product.retailer })
  const currProduct = Product.findOne({ name: productObj.product.name })


  return Promise.all([currManufacturer, currProduct])
  .then((res) => {
    const manufacturerRes = res[0]
    const productRes = res[1]

    const items = productObj.serialNumbers.map(num => new Item({
      serial: num,
      product: productRes._id,
      cora_id: uuid(),
    }))

    return Promise.all([manufacturerRes, ...items])
  })
  .then((res) => {
    const manufacturer = res[0]
    const items = res.slice(1)

    manufacturer.ownership = manufacturer.ownership.concat(items)
    manufacturer.markModified('ownership')

    return Promise.all([manufacturer.save(), ...items.map(item => item.save())])
  })
}

export default createCertificates
