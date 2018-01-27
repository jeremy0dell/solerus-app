import Manufacturer from '../model/manufacturer'
// import Product from '../model/product'

const createProductLine = (productObj, manufacturer) => {
  const currManufacturer = Manufacturer.findOne({ _id: manufacturer._id })
  return currManufacturer
}

export default createProductLine
