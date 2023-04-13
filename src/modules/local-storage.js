const domTasks = document.querySelector('.all-activities');
const todo = document.querySelector('.todo');
const abnormal = document.querySelector('.abnormal');

const store = (a) => {
  localStorage.setItem('tasks', JSON.stringify(a));
};

export {
  store, domTasks, todo, abnormal,
};