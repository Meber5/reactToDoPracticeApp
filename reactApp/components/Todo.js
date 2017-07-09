import React from 'react';

const Todo = ({task, completed, toggleTodo, deleteTodo}) => {
  return (
    <li>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <button onClick={deleteTodo}>Remove</button>
    </li>
  );
}

export default Todo;
