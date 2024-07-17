import {v4 as uuidv4} from 'uuid';
import { validateTaskUpdate, validateTaskId } from "../utils/validate.js";

let tasks = [];

export const createTask = (req, res) => {
    const { title, description, taskDate} =req.body;
    const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        taskDate
    };
    tasks.push(newTask);
    res.status(200).json(newTask);
};

export const getAllTasks = (req, res) => {
    res.json(tasks);
};

export const getTaskById = (req, res) => {
    const { id } = req.params;

    if (!isValidUUID(id)) {
        return res.status(400).json({ message: 'Not found' });
    }

    const task = tasks.find(task => task.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(400).json({ message: 'Task not found' });
    }
};

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed, taskDate } = req.body;
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = title;
        task.description = description;
        task.completed = completed;
        task.taskDate = taskDate;
        res.json(task);
    } else {
        res.status(400).json({ message: 'task not found' });
    }
};