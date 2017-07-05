import React from 'react';
import ToDo from './Todo';

class ToDoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.todos.map((item)=> <ToDo key={item.taskText} task={item.taskText} todoXClick={this.props.todoXClick} completed={item.completed}/>)}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
