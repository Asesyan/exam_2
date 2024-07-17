import {v4 as uuidv4} from 'uuid';
import { validate } from "../utils/validate.js";

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