import _ from 'lodash';
import './mystyles.css';
// import Icon from './Icon.svg'
// import Data from './data.xml';
// import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
  //  lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

//     const myIcon = new Image();
//     myIcon.src = Icon;

//   element.appendChild(myIcon);

//   console.log(Data);
//   console.log(Notes);
  
    return element;
  }
  
  document.body.appendChild(component());