import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  ownership: [{}],
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  usePushEach: true
})

export default mongoose.model('user', userSchema)
