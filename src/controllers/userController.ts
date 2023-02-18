import { Request, Response, NextFunction } from 'express'
import addUser from '../services/userService'
import validateUser from '../utils/userValidation'
import { IUser } from '../models/IUser'

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  const { error, value } = validateUser(body)

  if (error) {
    console.log(error)
    next()
    return
  }

  const user: IUser = value as IUser

  addUser(user)
  res.json(value)
}

export default registerUser
