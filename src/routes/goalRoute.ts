import { Router } from 'express'
import {
  addGoalHandler,
  getGoalHandler,
  getGoalsHandler,
  updateGoalHandler,
  deleteGoalHandler,
} from '../controllers/goalController'
import verifyUser from '../middlewares/authVerification'

const GoalRouter = Router({ mergeParams: true })

GoalRouter.use(verifyUser)

GoalRouter.route('/')
  .get(getGoalsHandler)
  .post(addGoalHandler)

GoalRouter.route('/:goalId')
  .get(getGoalHandler)
  .put(updateGoalHandler)
  .patch(updateGoalHandler)
  .delete(deleteGoalHandler)

export default GoalRouter
