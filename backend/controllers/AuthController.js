import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "config"
import UserModel from "../model/User.js" 

const register = async (req, res) => {
  try {
    const userBody = req.body
    const condidate = await UserModel.findOne({ email: userBody.email }) 
    if (condidate) {
      return res.status(400).json({
        message: 'User already exist!'
      })
    }
  
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userBody.password, salt)
  
    const doc = new UserModel({
      ...userBody,
      password: hashedPassword,
    })
    const user = await doc.save()
  
    const token = jwt.sign(
      {
        userId: user._id
      }, 
      config.get('JWT_SECRET'), 
      {  
        expiresIn: '30d'
      } 
    )
  
    return res.status(201).json({
      userId: user._id,
      token
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Failed to register"
    })
  }
}

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      })
    }

    const isMatched = await bcrypt.compare(req.body.password, user.password)
    if (!isMatched) {
      return res.status(401).json({
        message: "Invalid email or password"
      })
    }

    const token = jwt.sign(
      {
        userId: user._id
      },
      config.get('JWT_SECRET'),
      {
        expiresIn: '30d'
      }
    )

    res.json({
      userId: user._id,
      token
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Failed to login"
    })
  }
}

export default { register, login }