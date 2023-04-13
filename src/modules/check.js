import { domTasks, store } from './local-storage.js';
import displayTasksCaller from '../dispcaller.js';
import slotFunction from '../logic.js';

const status = (index, a) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (a.checked) tasks[index].completed = true;
  else tasks[index].completed = false;
  displayTasksCaller(tasks, index);
};

const clearer = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks.length === 0) return;
  if (tasks.length === 1) {
    if (tasks[0].completed === true) {
      tasks.pop();
      store(tasks);
      slotFunction(0);
      domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
      domTasks.classList.add('task-less');
    }
  } else {
    const filtered = tasks.filter((verify) => verify.completed === false);
    displayTasksCaller(filtered);
  }
};

export { status, clearer };