import { Router } from 'express'
import { registerUserHandler, getUserHandler, getUsersHandler } from '../controllers/userController'

const userRouter = Router()

userRouter.route('/')
  .post(registerUserHandler)
  .get(getUsersHandler)

userRouter.route('/:id')
  .get(getUserHandler)

export default userRouter
