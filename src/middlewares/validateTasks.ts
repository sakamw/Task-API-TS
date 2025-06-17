import { Request, Response, NextFunction } from "express";

export const validateTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { question, answer } = req.params;
  if (!question) {
    res.status(400).json({ message: "Title is required " });
    return;
  }
  if (!answer) {
    res.status(400).json({ message: "Answer is required " });
    return;
  }
  next();
};
