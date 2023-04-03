import { Types } from 'mongoose'

export interface IGoal {
  id?: Types.ObjectId
  title: String
  description: String
  deadline: Date
  recipientEmail: String
  completed: Boolean
  user: Types.ObjectId
}
