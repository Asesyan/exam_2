export function validateTask(title, description) {
    if (!title || !description) {
        return false;
    }

    if (typeof title !== 'string' || typeof description !== 'string') {
        return false;
    }

    if (title.length > 100 || !/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(title)) {
        return false;
    }

    if (description.length > 1200) {
        return false;
    }

    return true;
}

export function validateTaskUpdate(title, description, completed, taskDate) {
    if (title && typeof title !== 'string') {
        return false;
    }

    if (description && typeof description !== 'string') {
        return false;
    }

    if (title && (title.length > 100 || !/^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(title))) {
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
