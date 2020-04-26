import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./signup-info2.css";
import buttonNext from "./play-button.png"

class Disease extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      disease:'false',
      smoke:'false',
      dc_other:''
    }
  }


  state = { highBlood: false }
  handleHighBloodChange = event =>
    this.setState({ highBlood: event.target.checked, })
    
    state = { diabetes: false }
  handleDiabetesChange = event =>
    this.setState({ diabetes: event.target.checked, })

    state = { hightFat: false }
  handleHightFatChange = event =>
    this.setState({ hightFat: event.target.checked, })

    state = { kidneyFail: false }
  handleKidneyFailChange = event =>
    this.setState({ kidneyFail: event.target.checked, })

    state = { asthma: false }
  handleAsthmaChange = event =>
    this.setState({ asthma: event.target.checked, })

    state = { emphysema: false }
  handleEmphysemaChange = event =>
    this.setState({ emphysema: event.target.checked, })

    state = { heartDisease: false }
  handleHeartDiseaseChange = event =>
    this.setState({ heartDisease: event.target.checked, })

    state = { other: false }
  handleOtherChange = event =>
    this.setState({ other: event.target.checked, })

  changeHandler=(e)=>{
    this.setState({[e.target.className]:e.target.value})
  }


  onDiseaseChange = (e) => {
    this.setState({
      disease: e.target.value,
    });
  }
  onSmokeChange = (e) => {
    this.setState({
      smoke: e.target.value,
    });
  }
  onHighbloodChange = (e) => {
    this.setState({
      highblood: e.target.value,
    });
  }
  connect=()=> {
    var data = this.state
    console.log(this.state)
    fetch('http://localhost:8088/sign-up', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };
  render() {
    const {dc_other}=this.state
    return (
      <div className="bgDisease">
        <div className="question2">โรคประจำตัว</div>
        <div className="answer2">
        <div className="content2">
          <div className="line21"><input type="radio" value="false" name="disease"  onChange={this.onDiseaseChange}></input>ไม่มี</div>
          <div className="line22"><input type="radio" value="true" name="disease" onChange={this.onDiseaseChange}></input>มี</div>
          <div className="line23"><input type="checkbox" checked={this.state.checked} onChange={this.handleHighBloodChange}></input>โรคความดันโลหิตสูง</div>
          <div className="line24"><input type="checkbox" checked={this.state.checked} onChange={this.handleDiabetesChange}></input>เบาหวาน</div>
          <div className="line25"><input type="checkbox" checked={this.state.checked} onChange={this.handleHightFatChange}></input>ไขมันสูง</div>
          <div className="line26"><input type="checkbox" checked={this.state.checked} onChange={this.handleKidneyFailChange}></input>ไตวาย</div>
          <div className="line27"><input type="checkbox" checked={this.state.checked} onChange={this.handleAsthmaChange}></input>หอบหืด</div>
          <div className="line28"><input type="checkbox" checked={this.state.checked} onChange={this.handleEmphysemaChange}></input>ถุงลมโป่งพอง</div>
          <div className="line29"><input type="checkbox" checked={this.state.checked} onChange={this.handleHeartDiseaseChange}></input>โรคหัวใจ</div>
          <div className="line210">อื่นๆ
          <input className="dc_other"  type="text"value={dc_other} onChange={this.changeHandler}></input></div>
          <div className="line211">สูบบุหรี่
          <input type="radio" value="true" name="smoke" onChange={this.onSmokeChange}></input>สูบ
          <input type="radio" value="false" name="smoke" onChange={this.onSmokeChange}></input>ไม่สูบ</div>
        </div>
        </div>
        <div className="iconNext2">
          <Link to={"/Assessment"}>
          <button className="next2" type="submit" onClick={this.connect}>
            <img className="INext2" src={buttonNext}/>
            </button>
          </Link>
          </div>
      </div>
    );
  }
}

export default Disease;
