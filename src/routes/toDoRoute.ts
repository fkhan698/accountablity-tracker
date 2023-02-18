import { Router } from 'express'
import {
  getToDoItem,
  addToDoItem,
  updateToDoItem,
  deleteToDoItem,
} from '../controllers/toDoController'
import verifyUser from '../middlewares/authVerification'

const toDoRouter = Router()

toDoRouter.route('/')
  .all(verifyUser)
  .get(getToDoItem)
  .post(addToDoItem)
  .put(updateToDoItem)
  .delete(deleteToDoItem)

export default toDoRouter
