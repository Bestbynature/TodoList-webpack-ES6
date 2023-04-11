/* eslint-disable  import/no-cycle, import/no-mutable-exports */

import {
  tasks, domTasks, displayTasksCaller, slotFunction,
} from '../index.js';
import store from './local-storage.js';

const deleter = (a) => {
  if (tasks.length === 1) {
    tasks.pop();
    store();
    slotFunction();
    domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less')
  } else {
    const newTasks = tasks.filter((elem) => elem.index - 1 !== a);
    displayTasksCaller(newTasks);
  }
};

export default deleter;