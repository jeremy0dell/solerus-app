import mongoose, { Schema } from 'mongoose'

const transferSchema = Schema({
  transferer: { type: mongoose.Schema.Types.ObjectId, required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, required: true },
  transferDate: { type: Date, required: true, default: Date.now },
})

export default mongoose.model('transfer', transferSchema)
