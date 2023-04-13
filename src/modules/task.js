import { domTasks, todo, abnormal } from './local-storage.js';
import displayTasks from './display.js';

const addTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (todo.value) {
    const test = tasks.some((tested) => {
      if (tested.description.toLowerCase() === todo.value.toLowerCase()) return true;
      return false;
    });
    if (test) {
      abnormal.style.display = 'block';
      abnormal.innerHTML = 'Sorry! You can\'t add the same task twice';
    } else {
      abnormal.style.display = 'none';
      let newText = todo.value;
      const firstPart = newText.trim().split('').slice(0, 1).join('')
        .toUpperCase();
      const secondPart = newText.trim().split('').slice(1).join('')
        .toLowerCase();
      newText = firstPart.concat(secondPart);
      const task = {
        description: newText,
        index: tasks.length + 1,
        completed: false,
      };
      tasks.push(task);
      todo.value = '';
      domTasks.innerHTML = '';
      displayTasks(tasks);
    }
  } else {
    abnormal.style.display = 'block';
    abnormal.innerHTML = 'Sorry! You can\'t add an empty task';
  }
};

export default addTask;