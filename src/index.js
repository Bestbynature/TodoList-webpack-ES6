import './mystyles.css';

import addTask from './modules/task.js';
import { domTasks } from './modules/local-storage.js';
import { status, clearer } from './modules/check.js';
import displayTasks from './modules/display.js';
import deleter from './modules/delete.js';
import { dragStart, dragOver, drop } from './modules/dragmodule.js';
import slotFunction from './logic.js';
import update from './modules/update.js';

const addButton = document.querySelector('.fa-arrow-right-to-bracket');
const clear = document.querySelector('.clear');

addButton.addEventListener('click', addTask);
clear.addEventListener('click', clearer);
document.addEventListener('dragover', (event) => dragOver(event));
document.addEventListener('dragstart', (e) => dragStart(e));
document.addEventListener('drop', (event) => drop(event));
document.addEventListener('click', (e) => {
  let collect = e.target.classList;
  const { id } = e.target;
  collect = Array.from(collect);
  if (collect.includes('description')) {
    const description = e.target;
    description.addEventListener('input', (ev) => {
      update(ev.target.textContent, id);
    });
  } else if (collect.includes('fa-trash-can')) {
    deleter(id);
  } else if (collect.includes('check')) {
    const check = e.target;
    check.addEventListener('change', () => {
      status(id - 1, check);
    });
  }
});

window.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTask();
});

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if ((tasks.length > 0)) {
    tasks.forEach((fresh) => {
      fresh.completed = false;
    });
    displayTasks(tasks);
  } else {
    // tasks = [];
    domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less');
    slotFunction(0);
  }
};