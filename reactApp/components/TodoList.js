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
          {this.props.todos.map((item)=> <ToDo key={item.taskText} task={item.taskText} completed={item.completed}/>)}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
