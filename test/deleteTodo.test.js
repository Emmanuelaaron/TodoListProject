import { jest } from '@jest/globals';
import deleteTodo from '../src/deleteTodo';
import createTodo from '../src/createTodo';
import { load, updateStorage } from '../src/storage';

jest.mock('localStorage.js');

describe('Delete To-do', () => {
  let list = [];
  createTodo(list, 'coding', true);
  test('dele an element of description "Coding" and index 1 to list', () => {
    expect(deleteTodo(list).length).toBe(0);
  });
  test('dele an element of description "Coding" and index 1 to list', () => {
    list = deleteTodo(list);
    updateStorage(list);
    expect(load().length).toBe(0);
  });
});