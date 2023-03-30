/* eslint-disable  import/no-cycle, import/no-mutable-exports, import/prefer-default-export */

import { tasks, abnormal } from '../index.js';
import { store } from './local-storage.js';

export const update = (item, number) => {
  const test = tasks.some((tester) => {
    if (tester.description.toLowerCase() === item.toLowerCase()) return true;
    return false;
  });
  if (test) {
    abnormal.style.display = 'block';
    abnormal.innerHTML = 'Sorry! You can\'t add the same task twice';
  } else {
    abnormal.style.display = 'none';
    tasks[number].description = item;
    store();
  }
};