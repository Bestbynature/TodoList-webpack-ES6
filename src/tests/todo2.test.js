jest.mock('../index.js');

const { edupclear } = require('../index.js');

test('sample testing of jest', () => {
  expect(1).toBe(1);
});

describe('Testing the function that edit, update and clear', () => {
  test('testing the update of desccription', () => {
    expect(edupclear.update('going to the Supermarket')).toStrictEqual([
      {
        index: 1,
        description: 'going to the Supermarket',
        completed: false,
      },
    ]);
  });

  test('testing the completed status', () => {
    expect(edupclear.status(0)).toStrictEqual([
      {
        index: 1,
        description: 'going to the Supermarket',
        completed: true,
      },
    ]);
  });

  test('testing the clear all button', () => {
    expect(edupclear.clearer()).toStrictEqual([]);
  });
});
