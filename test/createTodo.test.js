import createTodo from '../src/createTodo';

describe('Create To-do', () => {
  const list = [];

  test('adds an element of description "Coding" and index 1 to list', () => {
    expect(createTodo(list, 'Coding')).toEqual([{ description: 'Coding', completed: false, index: 1 }]);
  });
});