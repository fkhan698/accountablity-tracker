import { Request, Response } from 'express'

import {
  getItems,
  getSingleItem,
  addItem,
  updateItem,
  deleteItem,
} from '../services/goalService'

export const getGoalItems = async (req: Request, res: Response) => {
  getItems(req, res)
}

export const getSingleGoalItem = async (req: Request, res: Response) => {
  getSingleItem(req, res)
}
export const addGoalItem = async (req: Request, res: Response) => {
  addItem(req, res)
}

export const updateGoalItem = async (req: Request, res: Response) => {
  updateItem(req, res)
}

export const deleteGoalItem = async (req: Request, res: Response) => {
  deleteItem(req, res)
}
