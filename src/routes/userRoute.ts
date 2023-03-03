import { Router } from 'express'
import registerUser from '../controllers/userController'

const userRouter = Router()

userRouter.route('/')
  .get((req, res) => { res.send('users page') })
  .post(registerUser)

export default userRouter
