import { Schema, model } from "mongoose";

const schema = new Schema({
  type: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  holder: {
    type: String,
    required: true,
  },
  validThru: {
    type: Date,
    required: true
  },
  number: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export default model('Card', schema)