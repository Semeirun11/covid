import React, { Component } from "react";
import buttonNext from "./play-button.png"
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moment from "moment";
import "./travel.css";
class Travel extends Component {
  constructor(props){
    super(props)
    this.state={
      inputAddress:''
    }
  }
  changeHandler=(e)=>{
    this.setState({[e.target.className]:e.target.value})
  }
  onTypeStateChange = (e) => {
    this.setState({
      place_type: e.target.value,
    });
  }


  onTypeVehicleChange = (e) => {
    this.setState({
      travel_type: e.target.value,
    });
  }

  onProtectOrNotChange = (e) => {
    this.setState({
      protect: e.target.value,
    });
  }

  state = {
    endDate: new Date(),
    startDate:new Date()
  };

  dateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      endDate: date,
      arrival_date: moment(date).format("DD-MM-YYYY")
    });
  };

  edateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      startDate: date,
      departure_date: moment(date).format("DD-MM-YYYY")
    });
  };
  connect=()=> {
    var data = this.state
    console.log(this.state)
    axios.post("http://localhost:8088/travel-history", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
  };
  render() {
    const {inputAddress,inputPostal}=this.state
    return (
      <form onSubmit={this.submitHandler}>
      <div className="bgSignupInfo7">
            <div className="dailyQuestion5">การเดินทางออกนอกจังหวัด หรือ นอกประเทศ</div>
            <div className="answer7">
            <div className="line71"><div className="address">ชื่อสถานที่</div></div>
            <div className="line72"><input className="inputAddress" type="text"value={inputAddress} onChange={this.changeHandler}></input></div>
    
            <div className="line76"><div className="typeAddress">ประเภทของสถานที่</div></div>
            <div className="line77"><select className="selectTypeAddress" onChange={this.onTypeStateChange}>
              <option value="Darkplace">สถานที่ปิดทึบ</option>
              <option value="Crowdedplace">พื้นที่มีคนแออัด</option>
            </select></div>
            <div className="line78"><div className="vehicle">ยานพาหนะที่ใช้เดินทาง</div></div>
            <div className="line79">
              <input type="radio" value="private" name="travel_type" onChange={this.onTypeVehicleChange}></input>ส่วนตัว
              <input type="radio" value="public" name="travel_type" onChange={this.onTypeVehicleChange}></input>สาธารณะ
              </div>
            <div className="line710">วันที่เดินทาง
            <DatePicker className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
            </div>
            <div className="line710">วันที่กลับ
            <DatePicker className="outputDate"
                            selected={this.state.startDate}
                            onChange={this.edateChange}
                        />
            </div>           
            </div>
            <div className="iconNext7">
              <Link to={"/result"}>
                <button className="next7" type="submit" onClick={this.connect}><img className="INext7" src={buttonNext}/></button>
                </Link>
                </div>
        </div>
        </form>
    );
  }
}

export default Travel;
