const updateStatus = (todo, check) => {
  if (todo.completed === false) {
    todo.completed = true;
  } else {
    todo.completed = false;
  }

  if (check.checked === false) {
    check.checked = true;
  } else {
    check.checked = false;
  }
};

export default updateStatus;