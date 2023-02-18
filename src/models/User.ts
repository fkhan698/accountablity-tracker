import mongoose, { Schema } from 'mongoose'
import { IUser } from './IUser'

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
})

export default mongoose.model('User', userSchema, 'users')
