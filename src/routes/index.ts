import { Router } from 'express'
import userRouter from './userRoute'
import authRouter from './authRoute'

const router = Router()
router.use('/auth', authRouter)
router.use('/users', userRouter)

export default router
