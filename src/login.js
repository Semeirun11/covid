import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./login.css";
import TermOfUse from "./sign-up/TermOfUse.js";
import User from "./sign-up/signup-info.js";
import Disease from "./sign-up/signup-info2.js";
import Assessment from "./sign-in/assessment.js";
import Symptom from "./sign-in/symptom.js";
import Isolation from "./sign-in/isolation.js";
import Immigration from "./sign-in/immigration.js";
import Travel from "./sign-in/travel.js";
import Interaction from "./sign-in/interaction.js";
import test from "./test.js";
import History from "./history.js";
import detailResult from "./detailResult.js"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  connect = () => {
    var data = this.state;
    console.log(this.state);
        axios.post("http://localhost:8088/sign-in", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
    .then((res) => {
      if (res.status == 200) {
          window.location.replace("http://localhost:3000/Assessment")
      }
      else{
        alert("Please check Email or Password")
      }
  })

  };
  changeHandler = (e) => {
    this.setState({ [e.target.className]: e.target.value });
  };
  render() {
    const { password, email } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/TermOfUse" component={TermOfUse} />
          <Route path="/user" component={User} />
          <Route path="/Disease" component={Disease} />
          <Route path="/Assessment" component={Assessment} />
          <Route path="/Symptom" component={Symptom} />
          <Route path="/Isolation" component={Isolation} />
          <Route path="/Immigration" component={Immigration} />
          <Route path="/Travel" component={Travel} />
          <Route path="/Interaction" component={Interaction} />
          <Route path="/test" component={test} />
          <Route path="/history" component={History} />
          <Route path="/detailResult" component={detailResult} />
          <div className="bgLogin">
            <div className="content">
              <div className="headSignin">SIGN IN</div>
              <div className="e-mail">E-MAIL</div>
              <input
                className="email"
                type="text"
                value={email}
                onChange={this.changeHandler}
              ></input>
              <div className="password1">PASSWORD</div>
              <input
                className="password"
                type="password"
                value={password}
                onChange={this.changeHandler}
              ></input>
              <div className="btSigninSingout">
                <div className="signup">
                  <Link to={"/TermOfUse"}>sign up</Link>
                </div>
                <div className="text">or</div>
                <button className="signin" type="submit" onClick={this.connect}>
                  SIGN IN
                </button>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Login;
