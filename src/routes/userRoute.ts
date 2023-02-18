import { Router } from 'express'
import registerUser from '../controllers/userController'

const userRouter = Router()

userRouter.route('/')
  .post(registerUser)

export default userRouter
