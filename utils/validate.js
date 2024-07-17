export function validateTask(title, description) {
    if (!title || !description) {
        return false;
    }

    if (typeof title !== 'string' || typeof description !== 'string') {
        return false;
    }

    if (title.length > 100) {
        return false;
    }

    if (!/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(title)) {
        return false;
    }

    if (description.length > 1200) {
        return false;
    }

    return true;
}

export const getAllTasks = (req, res) => {
    if (tasks.length > 0) {
        res.json(tasks);
    } else {
        res.status(400).json({ message: 'empty' });
    }
};

export function validateTaskUpdate(title, description, completed, taskDate) {
    if (title && typeof title !== 'string') {
        return false;
    }

    if (description && typeof description !== 'string') {
        return false;
    }

    if (title && title.length > 100) {
        return false;
    }

    if (title && !/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(title)) {
        return false;
    }

    if (description && description.length > 1200) {
        return false;
    }

    if (completed && typeof completed !== 'boolean') {
        return false;
    }

    if (taskDate && isNaN(Date.parse(taskDate))) {
        return false;
    }
    return true;
}



