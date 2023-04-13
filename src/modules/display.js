import slotFunction from '../logic.js';
import { domTasks, store } from './local-storage.js';

const displayTasks = (arr) => {
  slotFunction(arr.length);
  domTasks.classList.remove('task-less');
  arr.forEach((task, i, all) => {
    const taskPane = document.createElement('div');
    taskPane.className = 'task-pane';
    taskPane.setAttribute('draggable', 'true');
    taskPane.setAttribute('id', `${task.index}`);

    const topLeft = document.createElement('div');
    topLeft.className = 'top-left';
    topLeft.setAttribute('id', `${task.index}`);

    const topRight = document.createElement('div');
    topRight.className = 'top-right';
    topRight.setAttribute('id', `${task.index}`);

    const leftRight = document.createElement('div');
    leftRight.className = 'left-right';
    leftRight.setAttribute('id', `${task.index}`);

    if (i % 2 === 0) leftRight.classList.add('dark');

    const check = document.createElement('input');
    check.className = 'check';
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', `${task.index}`);

    const description = document.createElement('p');
    description.textContent = task.description;
    description.className = 'description';
    description.setAttribute('id', `${task.index}`);
    description.setAttribute('contenteditable', 'true');

    if (task.completed === true) {
      check.setAttribute('checked', 'true');
      description.classList.add('text');
    }

    const trash = document.createElement('i');
    trash.className = 'fa-solid fa-trash-can fa-beat';
    trash.setAttribute('id', `${i}`);

    const anchor = document.createElement('i');
    anchor.className = 'fa-solid fa-ellipsis-vertical';
    anchor.setAttribute('id', `${task.index}`);

    topLeft.append(check, description, trash);
    topRight.appendChild(anchor);
    leftRight.append(topLeft, topRight);

    const ruler = document.createElement('hr');

    taskPane.append(leftRight, ruler);

    domTasks.appendChild(taskPane);

    store(all);

    topLeft.addEventListener('mouseenter', () => {
      trash.style.display = 'block';
      anchor.style.display = 'none';
    });

    topLeft.addEventListener('mouseleave', () => {
      trash.style.display = 'none';
      anchor.style.display = 'block';
    });
  });
};

export default displayTasks;