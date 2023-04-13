import { store, abnormal } from './local-storage.js';

const update = (item, number) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  const test = tasks.some((tester) => {
    if (tester.description.toLowerCase() === item.toLowerCase()) return true;
    return false;
  });
  if (test) {
    abnormal.style.display = 'block';
    abnormal.innerHTML = 'Sorry! You can\'t add the same task twice';
  } else {
    abnormal.style.display = 'none';
    tasks[number - 1].description = item;
    store(tasks);
  }
};

export default update;