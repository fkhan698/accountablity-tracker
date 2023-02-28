import mongoose, { Schema } from "mongoose"

export interface IGoal {
  title: String
  description: String
  deadline: Date
  completed: Boolean
}

const goalSchema = new Schema<IGoal>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  completed: { type: Boolean, default: false },
})

export default mongoose.model("Goal", goalSchema, "goals")
