import React, { Component } from "react";
import axios from "axios";
import buttonNext from "./play-button.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assessment.css";
class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptom: false,
      immigration: false,
      travelling: false,
      interaction: false,
      self_protection: ''
    };
  }

  state = { symptom: false };
  handleAbnormalChange = (event) =>
    this.setState({ symptom: event.target.checked });

  state = { immigration: false };
  handleAccommodationChange = (event) =>
    this.setState({ immigration: event.target.checked });

  state = { travelling: false };
  handleJourneyChange = (event) =>
    this.setState({ travelling: event.target.checked });
  onProtectOrNotChange = (e) => {
    this.setState({
      self_protection: e.target.value,
    });
  };
  onHaveChange = (e) => {
    this.setState({
      have: e.target.value,
    });
  };
  state = { interaction: false };
  handleriskChange = (event) =>
    this.setState({ interaction: event.target.checked });

     connect= async()=> {
      var data = this.state
      console.log(this.state)
      await axios.post("http://localhost:8088/assessment", JSON.stringify(data), {withCredentials:true,headers: {"Content-Type": "application/json"}});
      await axios.get("http://localhost:8088/assessment", {withCredentials:true,headers: {"Content-Type": "application/json"}});
      localStorage.setItem("symptom", this.state.symptom);
      localStorage.setItem("immigration", this.state.immigration);
      localStorage.setItem("travelling", this.state.travelling);
      localStorage.setItem("interaction", this.state.interaction);
      if(this.state.symptom==true){
        console.log("ee")
        window.location.href = `/Symptom`;
      }
      if(this.state.symptom==false&&this.state.immigration==true){
        console.log("ff")
        window.location.href = `/Immigration`;
      }
      if(this.state.symptom==false&&this.state.immigration==false&&this.state.travelling==true){
        console.log("gg")
        window.location.href = `/Travel`;
      }
      if(this.state.symptom==false&&this.state.immigration==false&&this.state.travelling==false&&this.state.interaction==true){
        console.log("hh")
        window.location.href = `/Interaction`;
      }
      if(this.state.symptom==false&&this.state.immigration==false&&this.state.travelling==false&&this.state.interaction==false){
        console.log("hh")
        window.location.href = `/history`;
      }
    };
  render() {
    return (
        <div className="bgSignupInfo3">
          <div className="dailyQuestion1">วันนี้มีอะไรใหม่ ?</div>
          <div className="answer3">
            <div className="line31">
              <input
                type="radio"
                value="true"
                name="have"
                onChange={this.onHaveChange}
              ></input>
              มี
              <input
                type="radio"
                value="false"
                name="have"
                onChange={this.onHaveChange}
              ></input>
              ไม่มี
            </div>
            <div className="line32">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleAbnormalChange}
              ></input>
              อาการผิดปกติ
            </div>
            <div className="line33">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleAccommodationChange}
              ></input>
              เปลี่ยนที่พัก
            </div>
            <div className="line34">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleJourneyChange}
              ></input>
              เดินทางไกล
            </div>
            <div className="line35">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleriskChange}
              ></input>
              ใกล้กลุ่มเสี่ยง
            </div>
            <div className="line36">
              <div className="protect">ป้องกันตนเอง</div>
            </div>
            <div className="line37">
              <input
                type="radio"
                value="true"
                name="protectOrNot"
                onChange={this.onProtectOrNotChange}
              ></input>
              ป้องกัน
              <input
                type="radio"
                value="false"
                name="protectOrNot"
                onChange={this.onProtectOrNotChange}
              ></input>
              ไม่ได้ป้องกัน
            </div>
          </div>
          <div className="iconNext3">   
            <button className="next3" type="submit" onClick={this.connect}>
              <img className="INext3" src={buttonNext} />
            </button>
          </div>
        </div>
    );
  }
}

export default Assessment;
