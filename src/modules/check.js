/* eslint-disable  import/no-cycle */
import { displayTasksCaller, tasks, domTasks } from '../index.js';
import { store } from './local-storage.js';

export const status = (index, a) => {
  if (a.checked) {
    tasks[index].completed = true;
  } else {
    tasks[index].completed = false;
  }
  store();
};

export const clearer = () => {
  if (tasks.length === 0) return;
  if (tasks.length === 1) {
    if (tasks[0].completed === true) {
      tasks.pop();
      store();
      domTasks.innerHTML = '';
    }
  } else {
    const filtered = tasks.filter((verify) => verify.completed === false);
    displayTasksCaller(filtered);
  }
};
