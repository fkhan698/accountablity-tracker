import { Types } from 'mongoose'
import { IGoal } from './IGoal'

export interface IUser {
  id?: Types.ObjectId
  email: String,
  password: String,
  goals?: [IGoal]
}
