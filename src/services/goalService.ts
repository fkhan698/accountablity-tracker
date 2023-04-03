import Goal from '../models/Goal'
import { IGoal } from '../models/IGoal'
import { IUser } from '../models/IUser'
import User from '../models/User'

export const addGoal = async (userId: string, goal: IGoal): Promise<IGoal | null> => {
  const createdGoal: (IGoal | null) = await Goal.create(goal)
  if (!createdGoal) {
    return null
  }

  const updatedUser: (IUser | null) = await User.findByIdAndUpdate(userId, {
    $push: {
      goals: createdGoal.id,
    },
  })

  if (!updatedUser) {
    return null
  }

  return createdGoal
}

export const getGoal = async (goalId: string) => {
  const goal: (IGoal | null) = await Goal.findById(goalId)

  return goal
}

export const getGoals = async (userId: string) => {
  const goals: (IGoal[] | null) = await Goal.find({ user: userId })

  return goals
}

export const updateGoal = async (goalId: string, newGoal: IGoal) => {
  const goal: (IGoal | null) = await Goal.findByIdAndUpdate(
    goalId,
    newGoal,
    { returnOriginal: false },
  )

  return goal
}

export const deleteGoal = async (goalId: String) => {
  const goal: (IGoal | null) = await Goal.findByIdAndDelete(goalId)

  return goal
}
