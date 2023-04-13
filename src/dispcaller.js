import { domTasks, store } from './modules/local-storage.js';
import displayTasks from './modules/display.js';
import slotFunction from './logic.js';

const displayTasksCaller = (gem, linedeco) => {
  let tasks;
  if (linedeco >= 0) {
    tasks = [...gem];
    domTasks.innerHTML = '';
    displayTasks(tasks);
  } else if (gem.length === 0) {
    tasks = [];
    store(tasks);
    domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less');
    slotFunction(0);
  } else {
    tasks = gem.map((mapped, i) => ({
      description: `${mapped.description}`,
      index: `${i + 1}`,
      completed: false,
    }));
    domTasks.innerHTML = '';
    displayTasks(tasks);
  }
};

export default displayTasksCaller;