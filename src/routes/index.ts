import { Router } from 'express'
import toDoRouter from './toDoRoute'
import userRouter from './userRoute'
import authRouter from './authRoute'

const router = Router()
router.use('/auth', authRouter)
router.use('/todo', toDoRouter)
router.use('/user', userRouter)

export default router
