import displayTasksCaller from '../dispcaller.js';

let startId; let dropId;

function dragStart(a) {
  startId = Number(a.target.id) - 1;
}

function dragOver(b) {
  b.preventDefault();
}

function drop(c) {
  if (startId < 0) return;

  const tasks = JSON.parse(localStorage.getItem('tasks'));
  dropId = Number(c.target.id) - 1;
  const insert = tasks[startId];
  if (startId > dropId) {
    if (dropId === 0) tasks.unshift(insert);
    else tasks.splice(dropId, 0, insert);
    tasks.splice(startId + 1, 1);
  } else {
    tasks.splice(dropId + 1, 0, insert);
    tasks.splice(startId, 1);
  }
  displayTasksCaller(tasks);
}

export { dragStart, dragOver, drop };
