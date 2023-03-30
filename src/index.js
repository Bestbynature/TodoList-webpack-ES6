/* eslint-disable  import/no-cycle, import/no-mutable-exports */
import './mystyles.css';
import { store } from './modules/local-storage.js';
import { addTask } from './modules/task.js';
import { update } from './modules/update.js';
import { deleter } from './modules/delete.js';
import { status, clearer } from './modules/check.js';

const addButton = document.querySelector('.fa-arrow-right-to-bracket');
export const todo = document.querySelector('.todo');
export const abnormal = document.querySelector('.abnormal');
export const domTasks = document.querySelector('.all-activities');
const clear = document.querySelector('.clear');

export let tasks = [];

let desc; let checkBox;

export const displayTasks = () => {
  tasks.forEach((task, i) => {
    const taskPane = document.createElement('div');
    taskPane.className = 'task-pane';

    const topLeft = document.createElement('div');
    topLeft.className = 'top-left';

    const topRight = document.createElement('div');
    topRight.className = 'top-right';

    const leftRight = document.createElement('div');
    leftRight.className = 'left-right';

    const check = document.createElement('input');
    check.className = 'check';
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', `${task.index}`);

    const description = document.createElement('p');
    description.textContent = task.description;
    description.className = 'description';
    description.setAttribute('contenteditable', 'true');

    const trash = document.createElement('i');
    trash.className = 'fa-solid fa-trash-can fa-beat';

    const anchor = document.createElement('i');
    anchor.className = 'fa-solid fa-ellipsis-vertical';

    topLeft.append(check, description, trash);
    topRight.appendChild(anchor);
    leftRight.append(topLeft, topRight);

    const ruler = document.createElement('hr');

    taskPane.append(leftRight, ruler);

    domTasks.appendChild(taskPane);

    store();

    topLeft.addEventListener('mouseenter', () => {
      trash.style.display = 'block';
      anchor.style.display = 'none';
    });

    topLeft.addEventListener('mouseleave', () => {
      trash.style.display = 'none';
      anchor.style.display = 'block';
    });

    description.addEventListener('input', () => {
      desc = description.textContent;
      update(desc, i);
    });

    trash.addEventListener('click', () => {
      deleter(i);
    });

    check.addEventListener('change', () => {
      checkBox = check;
      status(i, checkBox);
    });
  });
};

addButton.addEventListener('click', addTask);

window.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTask();
});

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach((fresh) => {
      fresh.completed = false;
    });
    displayTasks();
  } else {
    tasks = [];
  }
};

clear.addEventListener('click', clearer);

export const displayTasksCaller = (gem) => {
  if (gem.length === 0) {
    tasks = [];
    store();
    domTasks.innerHTML = '';
  } else {
    tasks = gem.map((mapped, i) => ({
      description: `${mapped.description}`,
      index: `${i + 1}`,
      completed: false,
    }));
    domTasks.innerHTML = '';
    displayTasks();
  }
};
