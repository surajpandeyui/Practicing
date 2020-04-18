import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username : 'surajpandey'
  }

  inputChangedHandler = (event) =>{
    this.setState({username: event.target.value});
  }

  render(){
    return(
      <div className="App">
        <UserInput Changed={this.inputChangedHandler} userName={this.state.username}/>
        <UserOutput  userName ={this.state.username} />
        <UserOutput  userName ={this.state.username} />
      </div>
    );
  }
}


export default App;
