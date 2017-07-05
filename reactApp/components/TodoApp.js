import React from 'react';
import InputLine from './InputLine';
import ToDoList from './ToDoList';

var dummyData = [{ taskText: "Walk the dogs", completed: true }, { taskText: "Go Surfing", completed: false }, { taskText: "Send it.", completed: false }];

class ToDoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={todos: []};
  }

  addToDo(task){
    console.log(task);
    var t = {
      taskText: task,
      completed: false
    }

    dummyData.push(t);
    this.setState({todos: dummyData});
  }

  removeToDo(task){
    dummyData.forEach((item) =>{
      if(item.taskText === task.taskText){
        item.completed = true;
      }
    });

    this.setState({todos: dummyData});
    //console.log("ok", task, this.state.todos);
  }

  componentDidMount(){
    this.setState({todos: dummyData});
  }

  render(){
    return(
      <div className="container">
        <InputLine submit={(task)=>this.addToDo(task)}/>
        <ToDoList todos={this.state.todos} todoXClick={(task)=>this.removeToDo(task)}/>
      </div>
    )
  }
}

export default ToDoApp;
