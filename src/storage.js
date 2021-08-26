const load = () => {
  const result = JSON.parse(localStorage.myTodos);
  return result;
};

const updateStorage = (myArr) => {
  localStorage.myTodos = JSON.stringify(myArr);
};

export { load, updateStorage };