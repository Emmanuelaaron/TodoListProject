/* eslint-disable consistent-return */
const Todo = (index, description, completed) => ({
  index, description, completed,
});

const createTodo = (arr, todoInput, completed = false) => {
  const length = arr.length + 1;
  const newTodo = Todo(length, todoInput.value, completed);
  arr.push(newTodo);
};

const IndexArrangement = (arr) => {
  arr.forEach((todo, todoIndex) => {
    todo.index = todoIndex + 1;
  });
};

const deleteTodo = (arr) => {
  if (arr.length > 0) {
    const newArr = arr.filter((todo) => todo.completed === false);
    IndexArrangement(newArr);
    return newArr;
  }
};

const editTodo = (todo, newDescription) => {
  todo.description = newDescription;
};

export {
  createTodo, deleteTodo, editTodo,
};
