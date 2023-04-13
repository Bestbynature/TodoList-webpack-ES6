const maximum = (a) => {
  if (a === 0) {
    a += 5;
    return a;
  }
  switch (a % 5) {
    case 1:
      a += 4;
      break;
    case 2:
      a += 3;
      break;
    case 3:
      a += 2;
      break;
    case 4:
      a += 1;
      break;

    default:
      a += 5;
      break;
  }
  return a;
};

const slot = document.querySelector('header>p');

const slotFunction = (a) => {
  const maxima = maximum(a);
  slot.innerHTML = '';
  slot.innerHTML += `<span> ${a} of ${maxima} slots </span><meter optimum="${Math.floor(0.5 * maxima)}" high="${Math.floor(0.7 * maxima)}" max="${maxima}" value="${a}"></meter>`;
};

export default slotFunction;