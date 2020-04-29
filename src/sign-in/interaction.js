import React, { Component } from "react";
import buttonNext from "./play-button.png"
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
import "./interaction.css";
class Interaction extends Component {

  constructor(props){
    super(props)
    this.state={
      address:''
    }
  }
  changeHandler=(e)=>{
    this.setState({[e.target.className]:e.target.value})
  }

  connect=()=> {
    var data = this.state
    console.log(this.state)
    axios.post("http://localhost:8088/interaction-history", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
  };
  state = {
    endDate: new Date()
  };

  dateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      endDate: date,
      date: moment(date).format("DD-MM-YYYY")
    });
  };
  onProtectOrNotChange = (e) => {
    this.setState({
      protect: e.target.value,
    });
  }
  render() {
    const {address}=this.state
    return (
      <form onSubmit={this.submitHandler}>
      <div className="bgSignupInfo8">
            <div className="dailyQuestion6">การสัมผัสกลุ่มเสี่ยง</div>
            <div className="answer8">
            <div className="line81">วันที่สัมผัสกลุ่มเสี่ยง
            <DatePickerInput className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
            </div>
            <div className="line82"><div className="address1">หากอาศัยอยู่ในพื้นที่เดียวกันกับกลุ่มเสี่ยง<div>โปรดระบุสถานที่</div></div></div>
            <div className="line83"><input className="address" type="text"value={address} onChange={this.changeHandler}></input></div>
            </div>
            <div className="iconNext8">
              <Link to={"/history"}>
                <button className="next8"type="submit" onClick={this.connect}><img className="INext8" src={buttonNext}/></button>
                </Link>
                </div>
        </div>
        </form>
    );
  }
}

export default Interaction;
