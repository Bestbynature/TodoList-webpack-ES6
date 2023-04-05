/*eslint-disable*/
const tasks = [];

class Updater {

  addTask(todo) {
    // let tasks = []
    tasks.push(todo);
    return tasks;
  }

  deleter(a) {
    if (tasks.length === 1) {
      tasks.pop();
      return tasks;
    }
    const newTasks = tasks.filter((elem) => elem.index - 1 !== a);
    return newTasks;
  }
}

const updateTask = new Updater();
exports.updateTask = updateTask;
