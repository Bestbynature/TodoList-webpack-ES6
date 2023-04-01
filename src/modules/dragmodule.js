/* eslint-disable  import/no-cycle */

import { displayTasksCaller, tasks } from '../index.js';

let startId; let dropId;

export function dragStart(a) {
  startId = Number(a.target.id) - 1;
}

export function dragOver(b) {
  b.preventDefault();
}

export function drop(c) {
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