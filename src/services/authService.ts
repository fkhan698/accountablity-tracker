import bcrypt from 'bcrypt'
import { IUser } from '../models/IUser'
import User from '../models/User'

const isUserAuthentic = async (user: IUser) => {
  const { email, password } = user
  const foundUser = await User.findOne({ email })
  return foundUser && bcrypt.compareSync(password.toString(), foundUser.password.toString())
}

export default isUserAuthentic
