const Todo = (index, description, completed) => ({
    index, description, completed
  });

const createTodo = (arr, todoInput, completed=false) => {
    let length = arr.length + 1
    const newTodo = Todo(length, todoInput.value, false)
    arr.push(newTodo)
}
  export default createTodo;
