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
