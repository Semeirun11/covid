import React, { Component } from 'react';
import './App.css';

class test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Danuwasin Smalldick',
      personal_id: null,
      email: null,
      password: '4444',
      birthday: null,
      sex: null,
      telephone: null,
      job: null,
      addressing: null,
      num_live: null
    };
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    fetch('http://localhost:8088/sign-up', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: this.state.name, password: this.state.password })
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <button className='btnReg' onClick={this.handleSubmit}>Click Me Please</button>
        </div>
      </div>
    );
  }
}

export default test;