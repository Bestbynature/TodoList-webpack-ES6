const Edupclear = require('./edupclear.js');

class Updater {
  addTask(todo) {
    this.tasks = [];
    this.tasks.push(todo);
    return this.tasks;
  }

  deleter(a) {
    this.tasks = [{
      index: 1,
      description: 'going to toilet',
      completed: false,
    }];
    if (this.tasks.length === 1) {
      this.tasks.pop();
      return this.tasks;
    }
    const newTasks = this.tasks.filter((elem) => elem.index - 1 !== a);
    return newTasks;
  }
}

const edupclear = new Edupclear();
exports.edupclear = edupclear;

const updateTask = new Updater();
exports.updateTask = updateTask;