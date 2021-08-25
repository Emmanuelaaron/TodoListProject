import { Todo } from './todo';

const createTodo = (arr, todoInput, completed = false) => {
  const length = arr.length + 1;
  const newTodo = Todo(length, todoInput, completed);
  arr.push(newTodo);
  return arr;
};

export default createTodo;