import { ObjectId } from 'mongoose'

export interface IGoal {
  id?: ObjectId,
  userId: ObjectId,
  title: String
  description: String
  deadline: Date
  completed: Boolean
}
