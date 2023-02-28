import { Router } from "express"
import goalRouter from "./goalRoute"
import userRouter from "./userRoute"
import authRouter from "./authRoute"

const router = Router()
router.use("/auth", authRouter)
router.use("/goal", goalRouter)
router.use("/user", userRouter)

export default router
