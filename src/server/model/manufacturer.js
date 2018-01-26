import mongoose, { Schema } from 'mongoose'

const manufacturerSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  ownership: [{}],
  productLines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  usePushEach: true,
})

export default mongoose.model('manufacturer', manufacturerSchema)
