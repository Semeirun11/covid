import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./TermOfUse.css";

class TermOfUse extends Component {
  render() {
    return (
      <div className="bgTermOfUse">
        <div className="content1">
          <div className="headSignup">SIGN UP</div>
          <div className="info-box">
            <div className="info">
              ดูธรรมะธรรมโมมั่งดิ้ ดูปรัชญ
            </div>
          </div>
          <div className="signinBtn">
            <Link to={"/"}>
              <button className="disagree">DISAGREE</button>
            </Link>
            <Link to={"/user"}>
              <button className="agree">AGREE</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TermOfUse;
