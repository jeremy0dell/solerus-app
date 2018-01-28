import mongoose, { Schema } from 'mongoose'

const transferSchema = Schema({
  transferer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  recipient: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  item: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Item' },
  transferDate: { type: Date, required: true, default: Date.now },
})

export default mongoose.model('transfer', transferSchema)
