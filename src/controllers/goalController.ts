import { Request, Response } from 'express'
import { isValidObjectId } from 'mongoose'
import { IGoal } from '../models/IGoal'
import {
  addGoal,
  getGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} from '../services/goalService'
import validateGoal from '../utils/goalValidation'
import sendEmail from '../services/emailService'

export const addGoalHandler = async (req: Request, res: Response) => {
  const { body } = req
  const { error, value } = validateGoal(body)

  if (error) {
    res.send(error.message)
    return
  }

  const goal: IGoal = value as IGoal

  const createdGoal: IGoal | null = await addGoal(goal)

  if (createdGoal == null) {
    res.send("Couldn't create goal")
    return
  }
  const { recipientEmail } = body
  const deadline = `${body.deadline.toLocaleString('en-US')}`
  const subject = 'Goal has been created'
  const text = `The goal ${body.title} has been created. The deadline for the goal is ${deadline}`
  sendEmail(recipientEmail, subject, text)
    .then(() => {
      console.log(`Email was sent to ${recipientEmail}`)
    })
    .catch(() => console.log(error))
  res.json(createdGoal)
}

export const getGoalHandler = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const goal: IGoal | null = await getGoal(id)

  if (goal == null) {
    res.send("Goal doesn't exist")
    return
  }
  if (!goal.completed && new Date() > goal.deadline) {
    const { recipientEmail } = goal
    const { deadline } = goal
    const subject = 'You suck'
    const text = `The goal ${goal.title} was failed. The deadline for the goal is ${deadline}`
    sendEmail(recipientEmail, subject, text)
      .then(() => {
        console.log(`Email was sent to ${recipientEmail}`)
      })
      .catch((error: any) => console.log(error))
  }

  res.json(goal)
}

export const getGoalsHandler = async (req: Request, res: Response) => {
  const goals: IGoal[] | null = await getGoals()

  if (goals == null) {
    res.send("Goals don't exist")
    return
  }

  res.json(goals)
}

export const updateGoalHandler = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const { body } = req
  const { error, value } = validateGoal(body)

  if (error) {
    res.send(error.message)
    return
  }

  const newGoal: IGoal = value as IGoal

  const goal: IGoal | null = await updateGoal(id, newGoal)

  if (goal == null) {
    res.send("Couldn't update goal")
    return
  }

  res.json(goal)
}

export const deleteGoalHandler = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    res.send('id is not a valid ObjectId')
    return
  }

  const goal: IGoal | null = await deleteGoal(id)

  if (goal == null) {
    res.send("Couldn't delete goal")
    return
  }

  res.json(goal)
}
