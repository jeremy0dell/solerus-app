import Manufacturer from '../model/manufacturer'
import Product from '../model/product'

const createProductLine = (productObj) => {
  console.log('productObj is', productObj)

  const currManufacturer = Manufacturer.findOne({ name: productObj.retailer })
  const newProduct = new Product(productObj)

  return Promise.all([currManufacturer, newProduct.save()])
  .then(([ManufacturerRes, ProductRes]) => {
    ManufacturerRes.productLines.push(ProductRes._id)
    ManufacturerRes.markModified('productLines')
    return ManufacturerRes.save()
  })
}

export default createProductLine
