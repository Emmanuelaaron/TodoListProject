/* eslint-disable no-loop-func */
import './style.css';
import updateStatus from './status';
import { createTodo, deleteTodo, editTodo } from './todo';

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

    const editForm = document.createElement('form');
    editForm.id = `editForm_${todoArray[i].index}`;
    editForm.style.display = 'none';

    const editInput = document.createElement('input');
    editInput.id = `editInput${todoArray[i].index}`;
    editInput.classList.add('editInput');
    editInput.placeholder = todoArray[i].description;

    const editBtn = document.createElement('button');
    editBtn.id = `editBtn${todoArray[i].index}`;
    editBtn.style.display = 'none';
    editBtn.innerText = 'edit';

    editBtn.addEventListener('click', () => {
      if (editInput.value === '') {
        editTodo(todoArray[i], todoArray[i].description);
      } else {
        editTodo(todoArray[i], editInput.value);
        updateStorage();
      }
    });

    editForm.appendChild(editInput);
    editForm.appendChild(editBtn);

    const todoChecker = document.createElement('input');
    todoChecker.type = 'checkbox';
    todoChecker.id = `checkbox_${todoArray[i].index}`;

    todoDesc.addEventListener('click', () => {
      todoDesc.style.display = 'none';
      editForm.style.display = 'block';
    });

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
    myTodo.appendChild(editForm);
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

  return myDiv;
};

todos.appendChild(clearAll());

const addBtn = document.getElementById('todoBtn');
const todoInput = document.getElementById('input');
addBtn.addEventListener('click', () => {
  createTodo(todoArray, todoInput);
  updateStorage();
});

const theFooter = document.getElementsByClassName('footerCard')[0];
theFooter.addEventListener('click', () => {
  const newArr = deleteTodo(todoArray);
  todoArray = newArr;
  updateStorage();
  todos.innerHTML = '';
  todos.innerHTML = `<h3>Today's To Dos</h3>
  <form>
      <input type="text" placeholder="Add to your list" id="input" required>
      <button id="todoBtn">Add</button>
  </form>
  `;
  todoListDisplay();
  todos.appendChild(clearAll());
});