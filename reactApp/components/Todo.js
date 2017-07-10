import React from 'react';

const Todo = ({task, completed, toggleTodo, deleteTodo}) => {
  return (
    <li>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <span>    </span>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
}

export default Todo;
