import { Request, Response } from "express";
import { PrismaClient, Tasks } from "@prisma/client";
const client = new PrismaClient();

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await client.tasks.findMany({
      where: { isCompleted: false },
      select: {
        id: true,
        title: true,
        description: true,
        isCompleted: true,
      },
    });
    res.status(200).json(tasks);
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createNewTasks = async (req: Request, res: Response) => {
  try {
    const { title, description }: Tasks = req.body;
    const newTask = await client.tasks.create({
      data: { title, description },
    });
    res.status(201).json(newTask);
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong creating" });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await client.tasks.findFirst({
      where: { id },
    });
    res.status(200).json(task);
  } catch (_e) {
    res.status(500).json({ message: "Task not found " });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted }: Tasks = req.body;
    const updatedTask = await client.tasks.update({
      where: { id },
      data: { title, description, isCompleted },
    });
    res.status(200).json(updatedTask);
  } catch (_e) {
    res.status(500).json({ message: "Failed to update task" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await client.tasks.delete({
      where: { id },
    });
    res.status(200).json({ message: "Task deleted" });
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// export const isCompletedTrue = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const completedTask = await client.tasks.update({
//       where: { id },
//       data: {
//         isCompleted: true,
//       },
//     });
//     res.status(200).json(completedTask);
//   } catch (_e) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
