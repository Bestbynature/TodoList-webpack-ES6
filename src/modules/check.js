/* eslint-disable  import/no-cycle */
import {
  displayTasksCaller, tasks, domTasks, slotFunction,
} from '../index.js';
import store from './local-storage.js';

export const status = (index, a) => {
  if (a.checked) tasks[index].completed = true;
  else tasks[index].completed = false;
  displayTasksCaller(tasks, index);
};

export const clearer = () => {
  if (tasks.length === 0) return;
  if (tasks.length === 1) {
    if (tasks[0].completed === true) {
      tasks.pop();
      store();
      slotFunction();
      domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less')
    }
  } else {
    const filtered = tasks.filter((verify) => verify.completed === false);
    displayTasksCaller(filtered);
  }
};
