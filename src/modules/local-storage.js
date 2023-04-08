/* eslint-disable import/no-cycle */
import { tasks } from '../index.js';

const store = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default store;