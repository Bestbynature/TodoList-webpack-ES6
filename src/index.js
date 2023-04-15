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
const wrapper = document.querySelector('.wrapper')
const section2 = document.querySelector('.prompt')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const name = document.querySelector('#name')
const username = document.querySelector('#username')
const warning = document.querySelector('.warning')


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
  name.innerHTML = `Welcome Back ${a}!`
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
}

btn1.addEventListener('click', ()=>{
  if(username.value !== ''){
  localStorage.setItem('name', JSON.stringify(username.value))
  }
  section2.classList.add('hidden');
  wrapper.style.display = 'block';
  let b = JSON.parse(localStorage.getItem('name'))
  yes(b);
})

btn2.addEventListener('click', ()=>{
  if(username.value !== ''){
    localStorage.setItem('name', JSON.stringify(username.value))
    warning.innerHTML = '';
    }else{
     warning.innerHTML = `<p>Please enter a name for the new list</p>`
      return
    }
 let number;
 while(isNaN(number)){
  number = prompt('Please note that this will erase the previously saved tasks. Kindly enter the initial Maximum slots you would need. This can still be increased later')
 }
 name.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('name'))}!`
 domTasks.innerHTML = 'No tasks to display at the moment. Please add some tasks...';
    domTasks.classList.add('task-less');
 slotFunction(0, number)
 section2.classList.add('hidden');
 localStorage.setItem('tasks', JSON.stringify([]))
 wrapper.style.display = 'block';
})