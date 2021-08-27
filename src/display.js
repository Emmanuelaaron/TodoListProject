import updateStatus from './status';
import { editTodo } from './todo';
import { updateStorage } from './storage';

const todos = document.getElementById('todos');
const todoListDisplay = (todoArray) => {
  updateStorage(todoArray);
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
        updateStorage(todoArray);
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
      updateStorage(todoArray);
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

export default todoListDisplay;