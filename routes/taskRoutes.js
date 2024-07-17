import express from "express";
import { createTask, updateTask, getAllTasks, getTaskById } from "../controllers/taskController.js";

const router = express.Router();


router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);



export default router;
