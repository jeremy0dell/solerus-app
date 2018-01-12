import mongoose, { Schema } from 'mongoose'

const itemSchema = Schema({

  // references the serial number assigned by manufacturer
  serial: { type: String, required: true },

  // refers to the ObjectId of a product stored in Product db
  product: { type: Schema.Types.ObjectId, required: true },

  // unique ID from the blockchain
  cora_id: { type: Number, required: true, index: { unique: true } },
})

export default mongoose.model('item', itemSchema)
