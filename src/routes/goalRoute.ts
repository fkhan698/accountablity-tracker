import { Router } from 'express'
import {
  getSingleGoalItem,
  getGoalItems,
  addGoalItem,
  updateGoalItem,
  deleteGoalItem,
} from '../controllers/goalController'
import verifyUser from '../middlewares/authVerification'

const GoalRouter = Router()

GoalRouter.route('/')
  .all(verifyUser)
  .get(getGoalItems)
  .post(addGoalItem)

GoalRouter.route('/:goalId')
  .get(getSingleGoalItem)
  .patch(updateGoalItem)
  .delete(deleteGoalItem)

export default GoalRouter
