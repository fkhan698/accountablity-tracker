import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'
import { addUser, getUser, getUsers } from '../services/userService'
import validateCredentials from '../utils/credentialsValidation'
import { IUser } from '../models/IUser'

export const registerUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  const { error, value } = validateCredentials(body)

  if (error) {
    console.log(error)
    next()
    return
  }

  const user: IUser = value as IUser

  addUser(user)
  res.json(value)
}

export const getUsersHandler = async (req: Request, res: Response) => {
  const users: (IUser[] | null) = await getUsers()

  if (users == null) {
    res.send('Users don\'t exist')
    return
  }

  res.json(users)
}

export const getUserHandler = async (req: Request, res: Response) => {
  const { userId } = req.params

  if (!isValidObjectId(userId)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const user: (IUser | null) = await getUser(userId)

  if (user == null) {
    res.send('User does not exist')
  }
  res.json(user)
}
