import { model, Schema } from "mongoose";

const schema = new Schema({
  type: {
    type: String,
  },
  transfer: {
    type: Number,
    required: true
  },
  recipient: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

export default model('RecentTransactions', schema)