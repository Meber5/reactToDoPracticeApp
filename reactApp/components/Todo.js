import React from 'react';

class ToDo extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.todoXClick(this.props.task);
  }

  render(){
    if(this.props.completed !== true){
      return <li><button onClick={this.handleClick}>{'X'}</button>{this.props.task}</li>;
    }
    return <li><button onClick={this.handleClick}>{'X'}</button>  <strike>{this.props.task}</strike></li>;
  }
}

export default ToDo;
