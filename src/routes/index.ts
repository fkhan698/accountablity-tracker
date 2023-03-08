import { Router } from 'express'
import goalRouter from './goalRoute'
import userRouter from './userRoute'
import authRouter from './authRoute'

const router = Router()
router.use('/auth', authRouter)
router.use('/goals', goalRouter)
router.use('/users', userRouter)

export default router
