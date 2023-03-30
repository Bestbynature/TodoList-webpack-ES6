/*eslint-disable*/
import { tasks } from '../index.js';

const store = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { store };