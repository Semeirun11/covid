import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TermOfUse from "./sign-up/TermOfUse.js";
import Logo from "./LOGO-AIE__New.png";
import login from "./login.js"
class App extends Component {
  connect = () => {
    
          window.location.replace("http://localhost:3000/login")
  };
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/login" component={login} />
     <div className="homePage">
       <img className="logo" src={Logo} />
       <button className="enterSite" onClick={this.connect}>เข้าสู่เว็บไซต์</button>
     </div>
     </Switch>
      </Router>
    );
  }
}

export default App;
