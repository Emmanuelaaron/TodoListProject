import { expect } from '@jest/globals';
import deleteTodo from '../src/deleteTodo';
import createTodo from '../src/createTodo';

describe('Delete To-do', () => {
  const list = [];
  createTodo(list, 'coding', true);
  test('dele an element of description "Coding" and index 1 to list', () => {
    expect(deleteTodo(list).length).toBe(0);
  });
});