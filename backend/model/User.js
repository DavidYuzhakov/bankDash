import { model, Schema } from "mongoose";

const schema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
  },
  avatar: String
}, {
  timestamps: true
})

export default model('User', schema)
