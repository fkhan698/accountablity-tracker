import { Request, Response } from 'express'
import { isValidObjectId, Types } from 'mongoose'
import { IGoal } from '../models/IGoal'
import {
  addGoal,
  getGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} from '../services/goalService'
import validateGoal from '../utils/goalValidation'

export const addGoalHandler = async (req: Request, res: Response) => {
  const { body } = req
  const { error, value } = validateGoal(body, req.method)

  const { userId } = req.params

  if (!isValidObjectId(userId)) {
    res.send('id is not a valid ObjectId')
    return
  }

  if (error) {
    res.send(error.message)
    return
  }

  value.user = new Types.ObjectId(userId)
  const goal: IGoal = value as IGoal

  const createdGoal: (IGoal | null) = await addGoal(userId, goal)

  if (createdGoal == null) {
    res.send('Couldn\'t create goal')
    return
  }

  res.json(createdGoal)
}

export const getGoalHandler = async (req: Request, res: Response) => {
  const { goalId } = req.params
  if (!isValidObjectId(goalId)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const goal: (IGoal | null) = await getGoal(goalId)

  if (goal == null) {
    res.send('Goal doesn\'t exist')
    return
  }

  res.json(goal)
}

export const getGoalsHandler = async (req: Request, res: Response) => {
  const { userId } = req.params
  if (!isValidObjectId(userId)) {
    res.send('id is not a valid ObjectId')
    return
  }
  const goals: (IGoal[] | null) = await getGoals(userId)

  if (goals == null) {
    res.send('Goals don\'t exist')
    return
  }

  res.json(goals)
}

export const updateGoalHandler = async (req: Request, res: Response) => {
  const { goalId } = req.params
  if (!isValidObjectId(goalId)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const { body } = req
  const { error, value } = validateGoal(body, req.method)

  if (error) {
    res.send(error.message)
    return
  }

  const newGoal: IGoal = value as IGoal

  const goal: (IGoal | null) = await updateGoal(goalId, newGoal)

  if (goal == null) {
    res.send('Couldn\'t update goal')
    return
  }

  res.json(goal)
}

export const deleteGoalHandler = async (req: Request, res: Response) => {
  const { goalId } = req.params
  if (!isValidObjectId(goalId)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const goal: (IGoal | null) = await deleteGoal(goalId)

  if (goal == null) {
    res.send('Couldn\'t delete goal')
    return
  }

  res.json(goal)
}
