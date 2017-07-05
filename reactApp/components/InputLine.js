import React from 'react';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state={text: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  handleSubmit(){
    if(this.state.text.length > 0){
      this.props.submit(this.state.text);
      console.log(this.state.text);
      this.setState({text: ""});
    }
    else{
      alert('Must enter a task to complete.')
    }
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="New task..." value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default InputLine;
