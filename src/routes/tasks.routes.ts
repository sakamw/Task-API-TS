import { Router } from "express";
import {
  getAllTasks,
  createNewTasks,
  getTaskById,
  updateTask,
  deletePost,
  // isCompletedTrue,
} from "../contollers/tasks.controller";
import { validateTasks } from "../middlewares/validateTasks";
const router = Router();

router.get("/", getAllTasks);
router.post("/", createNewTasks, validateTasks);
router.get("/:id", getTaskById, validateTasks);
router.put("/:id", updateTask, validateTasks);
router.delete("/:id", deletePost);
// router.delete("/:id", isCompletedTrue);

export default router;
