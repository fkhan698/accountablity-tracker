import Goal from '../models/Goal'
import { IGoal } from '../models/IGoal'

export const addGoal = async (goal: IGoal) => {
  const createdGoal: (IGoal | null) = await Goal.create(goal)

  return createdGoal
}

export const getGoal = async (id: string) => {
  const goal: (IGoal | null) = await Goal.findById(id)

  return goal
}

export const getGoals = async () => {
  const goals: (IGoal[] | null) = await Goal.find()

  return goals
}

export const updateGoal = async (id: string, newGoal: IGoal) => {
  const goal: (IGoal | null) = await Goal.findByIdAndUpdate(id, newGoal, { returnOriginal: false })

  return goal
}

export const deleteGoal = async (id: String) => {
  const goal: (IGoal | null) = await Goal.findByIdAndDelete(id)

  return goal
}
