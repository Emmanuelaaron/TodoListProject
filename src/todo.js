/* eslint-disable consistent-return */
const Todo = (index, description, completed) => ({
  index, description, completed,
});

const IndexArrangement = (arr) => {
  arr.forEach((todo, todoIndex) => {
    todo.index = todoIndex + 1;
  });
};

const editTodo = (todo, newDescription) => {
  todo.description = newDescription;
};

export {
  editTodo, Todo, IndexArrangement,
};
