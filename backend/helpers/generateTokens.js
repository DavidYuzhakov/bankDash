import jwt from 'jsonwebtoken'
import config from 'config'

export default (userId) => {
  const accessToken = jwt.sign(
    { userId }, 
    config.get('JWT_ACCESS_TOKEN'), 
    {
      expiresIn: '15m',
    }
  )

  const refreshToken = jwt.sign(
    { userId },
    config.get('JWT_REFRESH_TOKEN'),
    {
      expiresIn: '30d'
    }
  )

  return { accessToken, refreshToken }
}