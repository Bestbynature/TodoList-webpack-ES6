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
const wrapper = document.querySelector('.wrapper');
const section2 = document.querySelector('.prompt');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const name = document.querySelector('#name');
const username = document.querySelector('#username');
const warning = document.querySelector('.warning');
const warning2 = document.querySelector('.warning2');
const initialMax = document.querySelector('.initial-max');
const userNumber = document.querySelector('#user-number');

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

const yes = (a) => {
  name.innerHTML = `Welcome Back ${a}!`;
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if ((tasks.length > 0)) {
    tasks.forEach((fresh) => {
      fresh.completed = false;
    });
    displayTasks(tasks);
  } else {
    domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less');
    slotFunction(0);
  }
};

btn1.addEventListener('click', () => {
  if (username.value !== '') {
    localStorage.setItem('name', JSON.stringify(username.value));
  }
  section2.classList.add('hidden');
  wrapper.style.display = 'block';
  const b = JSON.parse(localStorage.getItem('name'));
  yes(b);
});

btn3.addEventListener('click', () => {
  const number = userNumber.value;
  if (number === '') {
    warning2.innerHTML = '<p>Please enter a valid number</p>';
    return;
  }
  initialMax.style.display = 'none';
  wrapper.style.display = 'block';
  name.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('name'))}!`;
  domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
  domTasks.classList.add('task-less');
  slotFunction(0, number);
  localStorage.setItem('tasks', JSON.stringify([]));
});

btn2.addEventListener('click', () => {
  if (username.value !== '') {
    localStorage.setItem('name', JSON.stringify(username.value));
    warning.innerHTML = '';
    section2.classList.add('hidden');
    wrapper.style.display = 'none';
    initialMax.style.display = 'flex';
    initialMax.scrollIntoView({ behavior: 'smooth' });
  } else {
    warning.innerHTML = '<p>Please enter a name for the new list</p>';
  }
});