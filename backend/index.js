import express from "express"
import mongoose from "mongoose"
import config from "config"
import cors from "cors"
import cookieParser from "cookie-parser"

import authRouter from "./routes/authRoutes.js"
import cardsRouter from "./routes/cardsRoutes.js"
import transactionsRouter from "./routes/transactionsRoutes.js"

const PORT = config.get('PORT') || 5000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}))

app.use('/auth', authRouter)
app.use('/card', cardsRouter)
app.use('/transactions', transactionsRouter)

async function start () {
  try {
    await mongoose.connect(config.get('MONGODB_URI'))
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (e) {
    console.log('DB error', e)
  }
}
start()