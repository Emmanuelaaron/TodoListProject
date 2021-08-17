import './style.css';

const todoArray = [
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
const todos = document.getElementById('todos');
const todoListDisplay = () => {
  for (let i = 0; i < todoArray.length; i += 1) {
    const myTodo = document.createElement('div');
    myTodo.classList.add('todos');
    const todoChecker = document.createElement('input');
    todoChecker.type = 'checkbox';
    todoChecker.id = 'checkbox';
    const todoDesc = document.createElement('p');
    todoDesc.classList.add('tododesc');
    todoDesc.innerHTML = todoArray[i].description;

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