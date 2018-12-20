import React, { Component } from 'react';
import DashBoard from '../src/containers/dashboard';
import './App.css';

class App extends Component {
  state = {
    formula: '',
    first: '',
    second: '',
    op: '',
    on: 'first'
  }

  handleChange = evt => {
    evt.preventDefault();
    let special = ['+', '-', '/', '*']
    let copyState = {...this.state}
    let { on, formula, first, second, op } = copyState;
    let name = evt.target.name;
    if (on === 'first' && special.indexOf(name) === -1) {
      let newFirst = first += evt.target.name;
      console.log(newFirst);
      this.setState({first: newFirst})
    } else if(special.indexOf(name) !== -1) {
      this.setState({on: 'op'})
      this.setState({op: name})
      this.setState({on: 'second'})
    } else if (on === 'second') {
      second += name;
      this.setState({ second })
    }
    // let value = evt.target.name;
    // this.setState({[on]: value})
  }
  

  render() {
    return (
      <div className="App">
        <DashBoard handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
