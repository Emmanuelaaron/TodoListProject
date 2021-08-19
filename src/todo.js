/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const Todo = (index, description, completed) => ({
  index, description, completed,
});

const createTodo = (arr, todoInput, completed = false) => {
  const length = arr.length + 1;
  const newTodo = Todo(length, todoInput.value, false);
  arr.push(newTodo);
};

const deleteTodo = (arr) => {
  if (arr.length > 0) {
    const newArr = arr.filter((todo) => todo.completed === false);
    IndexArrangement(newArr)
    return newArr;
  }
};

const IndexArrangement = (arr) => {
    arr.forEach((todo, todoIndex) => {
        todo.index = todoIndex + 1
    });
}

export { createTodo, deleteTodo };
