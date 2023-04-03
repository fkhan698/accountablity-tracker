import { Router } from 'express'
import { registerUserHandler, getUserHandler, getUsersHandler } from '../controllers/userController'
import goalRouter from './goalRoute'

const userRouter = Router()

userRouter.route('/')
  .post(registerUserHandler)
  .get(getUsersHandler)

userRouter.route('/:userId')
  .get(getUserHandler)

userRouter.use('/:userId/goals', goalRouter)

export default userRouter
