/* eslint-disable no-loop-func */
import './style.css';
import updateStatus from './status';
import { createTodo, deleteTodo } from './todo';

let todoArray = [];

if (localStorage.myTodos !== undefined) {
  todoArray = JSON.parse(localStorage.myTodos);
}

const updateStorage = () => {
  localStorage.myTodos = JSON.stringify(todoArray);
};

const todos = document.getElementById('todos');
const todoListDisplay = () => {
  updateStorage();
  for (let i = 0; i < todoArray.length; i += 1) {
    const myTodo = document.createElement('div');
    myTodo.classList.add('todos');

    const todoDesc = document.createElement('p');
    todoDesc.classList.add('tododesc');
    todoDesc.innerHTML = todoArray[i].description;

    const todoChecker = document.createElement('input');
    todoChecker.type = 'checkbox';
    todoChecker.id = `checkbox_${todoArray[i].index}`;
    todoChecker.addEventListener('click', () => {
      updateStatus(todoArray[i], todoChecker);
      if (todoDesc.style.textDecoration === 'line-through') {
        todoDesc.style.textDecoration = 'none';
      } else {
        todoDesc.style.textDecoration = 'line-through';
      }
      if (todoChecker.checked === true) {
        todoChecker.checked = false;
      } else {
        todoChecker.checked = true;
      }
      updateStorage();
    });

    if (todoArray[i].completed === true) {
      todoDesc.style.textDecoration = 'line-through';
      todoChecker.checked = true;
    }
    myTodo.appendChild(todoChecker);
    myTodo.appendChild(todoDesc);
    todos.appendChild(myTodo);
  }
};

todoListDisplay();

const clearAll = () => {
  const myDiv = document.createElement('div');
  myDiv.classList.add('footerCard');
  const divPara = document.createElement('p');
  divPara.classList.add('footerText');
  divPara.innerText = 'Clear all completed';
  myDiv.appendChild(divPara);
  myDiv.addEventListener('click', () => {
    const newArr = deleteTodo(todoArray);
    todoArray = newArr;
    updateStorage();
  });
  return myDiv;
};
todos.appendChild(clearAll());

const addBtn = document.getElementById('todoBtn');
const todoInput = document.getElementById('input');
addBtn.addEventListener('click', () => {
  createTodo(todoArray, todoInput);
  updateStorage();
});