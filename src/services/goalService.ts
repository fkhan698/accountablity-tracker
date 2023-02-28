import { Request, Response } from "express"
import Goal from "../models/Goal"
export const addItem = async (req: Request, res: Response) => {
  const { title, description, deadline } = req.body
  const goal = new Goal({
    title,
    description,
    deadline,
  })
  goal
    .save()
    .then((savedGoal) => {
      res.json(savedGoal)
      console.log(savedGoal)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: "Failed to save goal." })
    })
}

export const getSingleItem = async (req: Request, res: Response) => {
  const goalId = req.params.goalId
  return Goal.findById(goalId).then((goal) =>
    goal
      ? res.status(200).json({ goal })
      : res.status(404).json({ message: "Not Found" })
  )
}

export const getItems = async (req: Request, res: Response) => {
  return Goal.find()
    .then((goals) => res.status(200).json({ goals }))
    .catch((error) => res.status(500).json({ error }))
}

export const updateItem = async (req: Request, res: Response) => {
  const goalId = req.params.goalId
  return Goal.findById(goalId).then((goal) => {
    if (goal) {
      goal.set(req.body)
      return goal
        .save()
        .then((goal) => res.status(201).json({ goal }))
        .catch((error) => res.status(500).json(error))
    } else {
      return res.status(404).json({ message: "not found" })
    }
  })
}

export const deleteItem = async (req: Request, res: Response) => {
  const goalId = req.params.goalId
  return Goal.findByIdAndDelete(goalId)
    .then((goal) =>
      goal
        ? res.status(201).json({ goal, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }))
}
