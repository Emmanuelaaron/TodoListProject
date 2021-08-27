/* eslint-disable no-loop-func */
import './style.css';

import createTodo from './createTodo';
import deleteTodo from './deleteTodo';
import { load, updateStorage } from './storage';
import todoListDisplay from './display';

let todoArray = [];

if (localStorage.myTodos !== undefined) {
  todoArray = load();
}

const todos = document.getElementById('todos');

todoListDisplay(todoArray);

const clearAll = () => {
  const myDiv = document.createElement('div');
  myDiv.classList.add('footerCard');
  const divPara = document.createElement('p');
  divPara.classList.add('footerText');
  divPara.innerText = 'Clear all completed';
  myDiv.appendChild(divPara);

  return myDiv;
};

todos.appendChild(clearAll());

const addBtn = document.getElementById('todoBtn');
const todoInput = document.getElementById('input');
addBtn.addEventListener('click', () => {
  createTodo(todoArray, todoInput.value);
  updateStorage(todoArray);
});

const theFooter = document.getElementsByClassName('footerCard')[0];
theFooter.addEventListener('click', () => {
  const newArr = deleteTodo(todoArray);
  todoArray = newArr;
  updateStorage(todoArray);
  todos.innerHTML = '';
  todos.innerHTML = `<h3>Today's To Dos</h3>
  <form>
      <input type="text" placeholder="Add to your list" id="input" required>
      <button id="todoBtn">Add</button>
  </form>
  `;
  todoListDisplay(todoArray);
  todos.appendChild(clearAll());
});
