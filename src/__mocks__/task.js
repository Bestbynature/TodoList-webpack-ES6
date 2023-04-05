const tasks = [];

const addTask = (todo) => {
    tasks.push(todo);
    return tasks;
}

exports.addTask = addTask