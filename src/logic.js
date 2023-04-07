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

export default maximum;