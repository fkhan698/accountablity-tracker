import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import validateCredentials from '../utils/credentialsValidation'
import { IUser } from '../models/IUser'
import isUserAuthentic from '../services/authService'
import config from '../config'

const parseCredentials = (encodedCredentials: string) => {
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString()
  const [email, password] = decodedCredentials.split(':')

  return { email, password }
}

export const login = async (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    res.send('Authorization header missing')
    return
  }

  const [scheme, encodedCredentials] = req.headers.authorization.split(' ')

  if (!scheme || scheme !== 'Basic') {
    res.send('Basic Authorization is allowed only for login')
    return
  }

  const credentials = parseCredentials(encodedCredentials)
  const { error, value } = validateCredentials(credentials)

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
  res.json({ message: 'Logged in', token: token });
  console.log(user.email + " Logged in")
}

export const logout = async (req: Request, res: Response) => {
  res.cookie('jwt_token', '', {
    httpOnly: true,
    secure: false,
    sameSite: true,
    expires: new Date(0),
  })
  res.send('Logged Out')
}
