/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import createTodo from '../src/createTodo';
import {load, updateStorage} from '../src/storage'

describe('Create To-do', () => {
  let list;
  if (localStorage.myTodos !== undefined){
    list = load()
  }else {
    list = [];
  }


  test('adds an element of description "Coding" and index 1 to list', () => {
    list = createTodo(list, 'Coding');
    updateStorage(list);
    expect(load()).toHaveLength(1);
  });
});