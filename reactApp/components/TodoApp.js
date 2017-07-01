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
    var t = {
      taskText: task,
      completed: false
    }

    dummyData.push(t);
    console.log(dummyData);
    this.setState({todos: dummyData});
    return;

  }

  componentDidMount(){
    this.setState({todos: dummyData});
  }

  render(){
    return(
      <div className="container">
        <InputLine submit={()=>this.addToDo('test1')}/>
        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}

export default ToDoApp;
