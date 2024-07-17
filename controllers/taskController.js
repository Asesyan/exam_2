import { v4 as uuidv4 } from 'uuid';
import { validateTaskUpdate, validateTask } from '../utils/validate.js';

let tasks = [];

export const createTask = (req, res) => {
    const { title, description, taskDate } = req.body;

    if (!validateTask(title, description)) {
        return res.status(400).json({ message: 'Invalid task data' });
    }

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
    let { page } = req.query;
    page = parseInt(page) || 1;
    const pageSize = 10;
    const sortedTasks = tasks.slice().sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate));
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTasks = sortedTasks.slice(startIndex, endIndex);
    const response = {
        page,
        pageSize,
        totalPages: Math.ceil(sortedTasks.length / pageSize),
        tasks: paginatedTasks
    };
    res.json(response);
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
        res.status(404).json({ message: 'Task not found' });
    }
};

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed, taskDate } = req.body;
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (!validateTaskUpdate(title, description, completed, taskDate)) {
        return res.status(400).json({ message: 'Invalid task update data' });
    }

    task.title = title;
    task.description = description;
    task.completed = completed;
    task.taskDate = taskDate;
    res.json(task);
};

export const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: 'Task deleted' });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
