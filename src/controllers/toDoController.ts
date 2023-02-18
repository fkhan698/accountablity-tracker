import { Request, Response } from 'express'
import {
  getItem,
  addItem,
  updateItem,
  deleteItem,
} from '../services/toDoService'

export const getToDoItem = async (req: Request, res: Response) => {
  getItem()
  res.send('Get ToDo Item')
}

export const addToDoItem = async (req: Request, res: Response) => {
  addItem()
  res.send('Add ToDo Item')
}

export const updateToDoItem = async (req: Request, res: Response) => {
  updateItem()
  res.send('Update ToDo Item')
}

export const deleteToDoItem = async (req: Request, res: Response) => {
  deleteItem()
  res.send('Delete ToDo Item')
}
