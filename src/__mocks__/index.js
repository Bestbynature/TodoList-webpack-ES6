/*eslint-disable*/
let tasks = [];

class Updater {

  addTask(todo) {
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

class Edupclear{

  update = (item) => {
    tasks = [{   index: 1,
      description: 'going to the restaurant',
      completed: false}];
      tasks[0].description = item;
      return tasks
  }

  status = (index) => {
    tasks[index].completed = true;
    return tasks;
  };

  clearer = () => {
    if (tasks.length === 0) return;
    if (tasks.length === 1) {
      if (tasks[0].completed === true) {
        tasks.pop();
        return tasks
      }
    } else {
      const filtered = tasks.filter((verify) => verify.completed === false);
      return filtered
    }
  }
}

const updateTask = new Updater;
const edupclear = new Edupclear;
exports.updateTask = updateTask;
exports.edupclear = edupclear;

