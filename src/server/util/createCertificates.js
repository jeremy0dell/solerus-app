import uuid from 'uuid/v4'

import Manufacturer from '../model/manufacturer'
import Product from '../model/product'
import Item from '../model/item'

const createCertificates = (productObj) => {
  console.log('productObj is', productObj)

  const currManufacturer = Manufacturer.findOne({ name: productObj.product.retailer })
  const currProduct = Product.findOne({ name: productObj.product.name })


  return Promise.all([currManufacturer, currProduct])
  .then((res) => {
    const manufacturerRes = res[0]
    const productRes = res[1]
    // const itemsRes = res.slice(2)
    console.log('uuid is', uuid, uuid())

    const items = productObj.serialNumbers.map(num => new Item({
      serial: num,
      product: productRes._id,
      cora_id: uuid(),
    }))

    // itemsRes.map(item => ({ ...item, product: productRes._id, cora_id: uuidv1() }))

    // manufacturerRes.ownership.push(items)
    // manufacturerRes.markModified('ownership')

    // console.log('lol', manufacturerRes, items)

    return Promise.all([manufacturerRes, ...items])
  })
  .then((res) => {
    const manufacturer = res[0]
    const items = res.slice(1)

    manufacturer.ownership.push(items)
    manufacturer.markModified('ownership')

    return Promise.all([manufacturer.save(), ...items.map(item => item.save())])
  })
}

export default createCertificates
