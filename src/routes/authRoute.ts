import { Router } from 'express'
import { login, logout } from '../controllers/authController'

const authRouter = Router()

authRouter.route('/login')
  .post(login)

authRouter.route('/logout')
  .post(logout)

export default authRouter
