import mongoose, { Schema } from 'mongoose'

const itemSchema = Schema({

  // references the serial number assigned by manufacturer
  serial: { type: String, required: true },

  // refers to the ObjectId of a product stored in Product db
  product: { type: Schema.Types.ObjectId, required: true },

  // unique ID from the blockchain
  cora_id: { type: String, required: true, index: { unique: true } },

  /* Maybe be unique schema
    {
      owner_id: ObjectId,
      Date_acquired: new Date,
    }
  */

  history: [{}],
})

export default mongoose.model('item', itemSchema)
