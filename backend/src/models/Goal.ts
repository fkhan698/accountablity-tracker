import mongoose, { Schema } from 'mongoose'
import { IGoal } from './IGoal'
import slugify from 'slugify'

const goalSchema = new Schema<IGoal>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  recipientEmail: { type: String, required: true },
  completed: { type: Boolean, default: false },
  slug: {type: String, unique: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

goalSchema.pre('validate', function(next) {
  if(this.title) {
    this.slug = slugify(this.title, {lower: true, strict: true})
  }
})

export default mongoose.model('Goal', goalSchema, 'goals')
