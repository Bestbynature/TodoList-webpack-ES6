import { store, domTasks } from './local-storage.js';
import slotFunction from '../logic.js';
import displayTasksCaller from '../dispcaller.js';

const deleter = (a) => {
  a = Number(a);
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks.length === 1) {
    tasks = [];
    store(tasks);
    slotFunction(0);
    domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less');
  } else {
    const newTasks = tasks.filter((elem) => elem.index - 1 !== a);
    displayTasksCaller(newTasks);
  }
};

export default deleter;