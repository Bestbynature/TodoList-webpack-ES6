/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */

import { tasks, domTasks, displayTasksCaller } from '../index.js';
import { store } from './local-storage.js';

export const deleter = (a) => {
  if (tasks.length === 1) {
    tasks.pop();
    store();
    domTasks.innerHTML = '';
  } else {
    const newTasks = tasks.filter((elem) => elem.index - 1 !== a);
    displayTasksCaller(newTasks);
  }
};
