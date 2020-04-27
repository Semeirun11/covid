import React, { Component } from "react";
import buttonNext from "./play-button.png";
import "./isolation.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  };

  onSuggestionChange = (e) => {
    this.setState({
      suggestion: e.target.value,
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
            <input type="radio" value="true" name="suggestion"  onChange={this.onSuggestionChange}></input>ใช่
          </div>
          <div className="line53">
            <div className="byWhere">ชื่อสถานที่ที่รับคำแนะนำ</div>
          </div>
          <div className="line54">
            <select className="isolation_place" onChange={this.isolation_place}>
              <option value="Darkplace">สถานที่ปิดทึบ</option>
              <option value="Crowdedplace">พื้นที่มีคนแออัด</option>
            </select></div>
          <div className="line510">
            <div className="isolation_date">
              ไปวันที่
              <DatePicker className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
            </div>
          </div>
          <div className="line511">
          <input type="radio" value="false" name="suggestion"  onChange={this.onSuggestionChange}></input>ไม่ได้รับการรักษา
          </div>
        </div>
        <div className="iconNext5">
          <Link to={"/Interaction"}>
            <button className="next5" type="submit" onClick={this.connect}>
              <img className="INext5" src={buttonNext} />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Isolation;
