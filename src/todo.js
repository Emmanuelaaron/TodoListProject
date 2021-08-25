/* eslint-disable consistent-return */
const Todo = (index, description, completed) => ({
  index, description, completed,
});

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
  deleteTodo, editTodo, Todo,
};
