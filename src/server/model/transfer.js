import mongoose, { Schema } from 'mongoose'

const transferSchema = Schema({
  transferType: { type: String, required: true }, // M->M, U->U, U->M, M->U
  transferer: { type: mongoose.Schema.Types.ObjectId, required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, required: true },
  transferDate: { type: Date, required: true, default: Date.now },
})

export default mongoose.model('transfer', transferSchema)
