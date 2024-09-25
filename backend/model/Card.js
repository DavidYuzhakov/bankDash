import { Schema, model } from "mongoose";

const schema = new Schema({
  balance: {
    type: Number,
    required: true
  },
  holder: {
    type: String,
    required: true
  },
  validThru: {
    type: Date,
    required: true
  },
  number: {
    type: String,
    required: true,
    unique: true
  }
})

export default model('Card', schema)