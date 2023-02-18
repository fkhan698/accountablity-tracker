import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const jwtToken = req.headers.authorization?.split(' ')[1]
  const { publicKey } = config.jwt
  if (jwtToken) {
    try {
      jwt.verify(jwtToken, publicKey as jwt.Secret, { algorithms: ['RS256'] })
      next()
      return
    } catch (err) {
      res.send('Not Verified')
    }
  } else {
    res.send('Need JWT token')
  }
}

export default verifyUser
