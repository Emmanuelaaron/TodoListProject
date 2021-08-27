/**
 * @jest-environment jsdom
 */
import { expect, test } from '@jest/globals';
import { IndexArrangement, editTodo } from '../src/todo';
import deleteTodo from '../src/deleteTodo';
import createTodo from '../src/createTodo';
import { load, updateStorage } from '../src/storage';
import todoListDisplay from '../src/display';
import updateStatus from '../src/status';

describe('Create or delete To-do', () => {
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

  test('delete an element of description "Coding" and index 1 to list', () => {
    list = deleteTodo(list);
    updateStorage(list);
    expect(load().length).toBe(0);
  });

  test('Update index of elements to suit array\'s order after delete', () => {
    list = createTodo(list, 'Coding');
    list = createTodo(list, 'Cooking');
    list = createTodo(list, 'Running', true);
    list = createTodo(list, 'Dancing');
    updateStorage(list);

    list = deleteTodo(list);
    updateStorage(list);

    expect(load()[2].index).toBe(3);
    expect(load()[2].description).toBe('Dancing');
  });

  const array = [{ index: 3 }, { index: 1 }, { index: 2 }];

  test("arranges all objects' indexes to fit their position in the list", () => {
    IndexArrangement(array);
    expect(array[0].index).toBe(1);
    expect(array[1].index).toBe(2);
    expect(array[2].index).toBe(3);
  });

  test('edit to-do tool', () => {
    editTodo(list[0], 'Mowing');
    updateStorage(list);
    expect(load()[0].description).toBe('Mowing');
  });

  test('document format', () => {
    expect(document).toBeTruthy();
  });

  test('display todos list', () => {
    todoListDisplay(list);
    const todoDiv = document.querySelector('#todos');
    expect(todoDiv).toBeTruthy();
  });

  test('update status', () => {
    const checkBox = document.querySelector('#checkbox_1');
    updateStatus(list[0], checkBox);
    updateStorage(list);

    expect(checkBox.checked).toBeTruthy();
    expect(load()[0].completed).toBeTruthy();
    updateStatus(list[0], checkBox);
    updateStorage(list);

    expect(load()[0].completed).toBeFalsy();
  });
});