import mongoose, { Schema } from 'mongoose'

const productScema = Schema({

  // name of the product
  name: { type: String, required: true },

  // description of the product
  description: { type: String, required: true },

  // id of retailer who created this product
  retailer: { type: String, required: true },

  // path to product image in directory
  image: { type: String, required: true },
})

export default mongoose.model('product', productScema)
