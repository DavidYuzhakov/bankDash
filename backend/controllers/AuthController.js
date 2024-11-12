import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import UserModel from '../model/User.js'
import generateTokens from '../helpers/generateTokens.js'

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

    const newUser = new UserModel({
      ...userBody,
      password: hashedPassword,
    })
    const user = await newUser.save()

    const { accessToken, refreshToken } = generateTokens(user._id)

    res
      .cookie('refreshToken', refreshToken, { httpOnly: true })
      .cookie('accessToken', accessToken, { httpOnly: true })
      .status(200)
      .json({ message: 'User registered successfully' })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to register',
    })
  }
}

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

    const isMatched = await bcrypt.compare(req.body.password, user.password)
    if (!isMatched) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

   const { accessToken, refreshToken } = generateTokens(user._id)

    res
      .cookie('refreshToken', refreshToken, { httpOnly: true })
      .cookie('accessToken', accessToken, { httpOnly: true })
      .status(200)
      .json({ message: 'Login successful' })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to login',
    })
  }
}

const logout = async (_, res) => {
  return res
    .clearCookie('refreshToken')
    .clearCookie('accessToken')
    .status(200)
    .json({ message: 'Successfully logged out'})
}

const refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) {
    return res.status(403).json({ message: 'No refresh token provided' })
  }

  try {
    const decoded = jwt.verify(refreshToken, config.get('JWT_REFRESH_TOKEN'))
    const { accessToken } = generateTokens(decoded.userId)
    res
      .cookie('accessToken', accessToken, { httpOnly: true })
      .json({ message: 'Access token refreshed' })
  } catch (err) {
    console.log(err)
    res.status(401).json({
      message: 'Invalid refresh token'
    })
  }
}

const check = async (req, res) => {
  const accessToken = req.cookies.accessToken
  if (!accessToken) {
    return res.status(401).json({ message: 'No access token provided' })
  }

  try {
    await jwt.verify(accessToken, config.get('JWT_ACCESS_TOKEN'))
    res.json({ message: 'successfully authentificated'})
  } catch (err) {
    console.log(accessToken)
    res.status(403).json({
      message: 'No access'
    })
  }
}

export default { register, login, logout, refresh,check }
