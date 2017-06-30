"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Walk the dogs", "Go surfing", "send it"];

const ToDo = (props) => <li key={props.task}><button>{'X'}</button>{props.task}</li>;

class ToDoList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('test');
    return(
      <div>
        <ul>
          {this.props.data.map((item)=> <ToDo task={item} />)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ToDoList data={dummyData} />,
    document.getElementById('root'));
