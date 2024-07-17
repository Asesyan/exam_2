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

