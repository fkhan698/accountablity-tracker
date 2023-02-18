import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    email: email
  });
  return user
    .save()
    .then(author => res.status(201).json({ author }))
    .catch(error => res.status(500).json({ error }));
};

const readUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then(author =>
      author
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "not found" })
    )
    .catch(error => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: Function) => {
  return User.find()
    .then(users => res.status(200).json({ users }))
    .catch(error => res.status(500).json({ error }));
};

export default { createUser, readUser };
