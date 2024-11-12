import config from "config"
import jwt from "jsonwebtoken"

export default async (req, res, next) => {
  const token = req.cookies.accessToken
  if (!token) {
    return res.status(403).json({ message: 'No token provided'})
  }

  try {
    const decoded = await jwt.verify(token, config.get('JWT_ACCESS_TOKEN'))
    req.userId = decoded.userId
    next()
  } catch (err) {
    console.log(err)
    res.status(403).json({
      message: 'No access'
    })
  }
}