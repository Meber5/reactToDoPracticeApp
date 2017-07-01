import React from 'react';

const ToDo = (props) => {
  if(!props.completed){
    return <li><button>{'X'}</button>{props.task}</li>;
  }
  return <li><button>{'X'}</button>  <strike>{props.task}</strike></li>;
}

export default ToDo;