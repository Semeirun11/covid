import React, { Component } from 'react';
import './App.css';

class test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:''
    };
  }

  

  onClickSet=async(e)=>{
    await this.setState({
      id: e.target.value,
    });
    console.log(this.state.id)
  }

  render() {
    return (
      <div className="App">
        <div>
          <button value="aaa" onClick={this.onClickSet}>AAA</button>
          <button value="bbb" onClick={this.onClickSet}>BBB</button>
          <button value="ccc" onClick={this.onClickSet}>CCC</button>
        </div>
      </div>
    );
  }
}

export default test;