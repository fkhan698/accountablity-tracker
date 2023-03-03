import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import validateUser from '../utils/userValidation'
import { IUser } from '../models/IUser'
import isUserAuthentic from '../services/authService'
import config from '../config'

export const login = async (req: Request, res: Response) => {
  const { body } = req
  const { error, value } = validateUser(body)

  if (error) {
    res.send(error)
    return
  }

  const user: IUser = value

  const userAuthenticated = await isUserAuthentic(user)
  if (!userAuthenticated) {
    res.send('User or password are incorrect')
    return
  }

  const { privateKey } = config.jwt
  const token = jwt.sign({ user: user.email }, privateKey as jwt.Secret, {
    algorithm: 'RS256',
    expiresIn: '1h',
  })

  res.cookie('jwt_token', token, {
    httpOnly: true,
    secure: false,
    sameSite: true,
  })
  res.send('Logged in')
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  next()
  res.send('Logout')
}
