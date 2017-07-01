import React from 'react';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state={text: ""};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="New task..." value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.props.submit}>Submit</button>
      </div>
    )
  }
}

export default InputLine;
