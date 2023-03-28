import './mystyles.css';

const actArray = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean the dinning',
    completed: false,
    index: 2,
  },
  {
    description: 'Do the laundry',
    completed: false,
    index: 3,
  },
];

const allActivities = document.querySelector('.all-activities');

const iterator = () => {
  actArray.forEach((activity) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerHTML = `<div class="content">
                        <input type="checkbox" id="${activity.index}" class="check">
                        <p class="description">${activity.description}</p>
                        <p class="holder"><i class="fa-solid fa-ellipsis-vertical"></i></p>
                    </div><br>
                    <hr>`;
    allActivities.appendChild(li);
  });
};
iterator();