import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'
import { addUser, getUser, getUsers } from '../services/userService'
import validateUser from '../utils/userValidation'
import { IUser } from '../models/IUser'

export const registerUserHandler = async (req: Request, res: Response, next: NextFunction) => {
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
export const getUsersHandler = async (req: Request, res: Response) => {
  const users: (IUser[] | null) = await getUsers()

  if (users == null) {
    res.send('Users don\'t exist')
    return
  }

  res.json(users)
}

export const getUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    res.send('id is not a valid ObjectId')
    return
  }
  const user: (IUser | null) = await getUser(id)
  if (user == null) {
    res.send('User does not exist')
  }
  res.json(user)
}
