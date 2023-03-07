import mongoose, { Schema } from 'mongoose'
import { IGoal } from './IGoal'

const goalSchema = new Schema<IGoal>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  recipientEmail: { type: String, required: true },
  completed: { type: Boolean, default: false },
})

export default mongoose.model('Goal', goalSchema, 'goals')
