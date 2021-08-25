import { IndexArrangement } from './todo';

const deleteTodo = (arr) => {
  if (arr.length > 0) {
    const newArr = arr.filter((todo) => todo.completed === false);
    IndexArrangement(newArr);
    return newArr;
  }
};
export default deleteTodo;