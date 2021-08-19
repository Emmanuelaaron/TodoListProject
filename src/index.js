import './style.css';
import updateStatus from './status';

let todoArray = [
  {
    index: 1,
    description: 'Jogging',
    completed: false,
  },
  {
    index: 2,
    description: 'Reading a book',
    completed: false,
  },
  {
    index: 3,
    description: 'Learn coding',
    completed: false,
  }, {
    index: 4,
    description: 'Preparing food',
    completed: false,
  },
];

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
  return myDiv;
};
todos.appendChild(clearAll());