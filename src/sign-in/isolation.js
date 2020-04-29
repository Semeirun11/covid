import React, { Component } from "react";
import buttonNext from "./play-button.png";
import "./isolation.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
class Isolation extends Component {
  constructor(props){
    super(props)
    this.state={
      isolation_place:'',
      isolation_date:'',
      weary:localStorage.getItem("weary"),
      ache:localStorage.getItem("ache"),
      boredFood:localStorage.getItem("boredFood"),
      sleepless:localStorage.getItem("sleepless"),
      headache:localStorage.getItem("headache"),
      tired:localStorage.getItem("tired"),
      snot:localStorage.getItem("snot"),
      soreThroat:localStorage.getItem("soreThroat"),
      steam:localStorage.getItem("steam"),
      fever:localStorage.getItem("fever"),
      immigration: localStorage.getItem("immigration"),
      travelling: localStorage.getItem("travelling"),
      interaction: localStorage.getItem("interaction"),
    }
  }
  state = {
    endDate: new Date()
  };
  isolation_place = (e) => {
    this.setState({
      isolation_place: e.target.value,
    });
  }

  dateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      endDate: date,
      isolation_date: moment(date).format("DD-MM-YYYY")
    });
  };

  connect=()=> {
    var data = this.state
    console.log(this.state)
    axios.post("http://localhost:8088/symptom", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
    if(this.state.immigration=="true"){
      console.log("ff")
      window.location.href = `/Immigration`;
    }
    if(this.state.immigration=="false"&&this.state.travelling=="true"){
      console.log("gg")
      window.location.href = `/Travel`;
    }
    if(this.state.immigration=="false"&&this.state.travelling=="false"&&this.state.interaction=="true"){
      console.log("hh")
      window.location.href = `/Interaction`;
    }
    if(this.state.immigration=="false"&&this.state.travelling=="false"&&this.state.interaction=="false"){
      console.log("hh")
      window.location.href = `/history`;
    }
  };

  onIsolationChange = (e) => {
    this.setState({
      isolation: e.target.value,
    });
  }
  changeHandler=(e)=>{
    this.setState({[e.target.className]:e.target.value})
  }
  render() {
    return (
      <div className="bgSignupInfo5">
        <div className="dailyQuestion3">วิธีการรักษา</div>
        <div className="answer5">
          <div className="line51">
            <div className="byWho">
              ได้รับคำแนะนำจากบุคคลากรทางการแพทย์ในการรักษา
            </div>
          </div>
          <div className="line52">
            <input type="radio" value="true" name="isolation"  onChange={this.onIsolationChange}></input>ใช่
          </div>
          <div className="line53">
            <div className="byWhere">ประเภทของสถานที่ที่ได้รับคำแนะนำ</div>
          </div>
          <div className="line54">
            <select className="isolation_place" onChange={this.isolation_place}>
              <option value="Clinic">คลินิก</option>
              <option value="Hospital">โรงพยาบาล</option>
              <option value="Phamacy">ร้านขายยา</option>
            </select></div>
          <div className="line510">
            <div className="isolation_date1">
              ไปวันที่
              <DatePickerInput className="isolation_date"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
            </div>
          </div>
          <div className="line511">
          <input type="radio" value="false" name="isolation"  onChange={this.onIsolationChange}></input>ไม่ได้รับการรักษา
          </div>
        </div>
        <div className="iconNext5">
            <button className="next5" type="submit" onClick={this.connect}>
              <img className="INext5" src={buttonNext} />
            </button>
        </div>
      </div>
    );
  }
}

export default Isolation;
