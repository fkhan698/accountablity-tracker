import { Router } from 'express'
import {
  addGoalHandler,
  getGoalHandler,
  getGoalsHandler,
  updateGoalHandler,
  deleteGoalHandler,
} from '../controllers/goalController'
import verifyUser from '../middlewares/authVerification'

const GoalRouter = Router()

GoalRouter.use(verifyUser)

GoalRouter.route('/')
  .get(getGoalsHandler)
  .post(addGoalHandler)

GoalRouter.route('/:id')
  .get(getGoalHandler)
  .put(updateGoalHandler)
  .delete(deleteGoalHandler)

export default GoalRouter
