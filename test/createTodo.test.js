/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import deleteTodo from '../src/deleteTodo';
import createTodo from '../src/createTodo';
import { load, updateStorage } from '../src/storage';

describe('Create To-do', () => {
  let list;
  if (localStorage.myTodos !== undefined) {
    list = load();
  } else {
    list = [];
  }

  test('adds an element of description "Coding" and index 1 to list', () => {
    list = createTodo(list, 'Coding', true);
    updateStorage(list);
    expect(load()).toHaveLength(1);
  });

  test('dele an element of description "Coding" and index 1 to list', () => {
    list = deleteTodo(list);
    updateStorage(list);
    expect(load().length).toBe(0);
  });
});