import { Router } from 'express'
import registerUser from '../controllers/userController'

const userRouter = Router()
userRouter.get('/', (req, res) => {
  res.send('users page')
})
userRouter.route('/').post(registerUser)

export default userRouter
