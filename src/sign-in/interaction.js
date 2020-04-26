import React, { Component } from "react";
import buttonNext from "./play-button.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    fetch('http://localhost:8088/interaction-history', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
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
            <DatePicker className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
            </div>
            <div className="line82"><div className="address">หากอาศัยอยู่ในพื้นที่เดียวกันกับกลุ่มเสี่ยง<div>โปรดระบุสถานที่</div></div></div>
            <div className="line83"><input className="address" type="text"value={address} onChange={this.changeHandler}></input></div>
            </div>
            <div className="iconNext8">
              <Link to={"/immigration"}>
                <button className="next8"type="submit" onClick={this.connect}><img className="INext8" src={buttonNext}/></button>
                </Link>
                </div>
        </div>
        </form>
    );
  }
}

export default Interaction;
