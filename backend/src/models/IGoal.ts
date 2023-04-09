import { Types } from 'mongoose'

export interface IGoal {
  id?: Types.ObjectId
  title: string
  description: String
  deadline: Date
  recipientEmail: String
  completed: Boolean
  slug: string
  user: Types.ObjectId
}
