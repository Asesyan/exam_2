import {v4 as uuidv4} from 'uuid';

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
}