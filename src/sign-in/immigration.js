import React, { Component } from "react";
import buttonNext from "./play-button.png"
import "./immigration.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
class Immigration extends Component {

  constructor(props){
    super(props)
    this.state={
      address:'',
      postal:''
    }
  }
  changeHandler=(e)=>{
    this.setState({[e.target.className]:e.target.value})
  }
  dateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      endDate: date,
      date: moment(date).format("DD-MM-YYYY")
    });
  };

  onDistrictChange = (e) => {
    this.setState({
      district: e.target.value,
    });
  }

  onAmphoeChange = (e) => {
    this.setState({
      amphoe: e.target.value,
    });
  }
  onProvinceChange = (e) => {
    this.setState({
      province: e.target.value,
    });
  }


  connect=()=> {
    var data = this.state
    console.log(this.state)
    fetch('http://localhost:8088/accommodation', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };

  render() {
    const {address,postal}=this.state
    return (
      <form onSubmit={this.submitHandler}>
      <div className="bgSignupInfo6">
            <div className="dailyQuestion4">รายละเอียดที่พัก</div>
            <div className="answer6">
            <div className="line61"><div className="address">ตั้งอยู่ที่</div></div>
            <div className="line62"><input className="address" type="text"value={address} onChange={this.changeHandler}></input></div>
            <div className="line63">ตำบล
            <select className="selectDistrict" onChange={this.onDistrictChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select></div>
            <div className="line63">อำเภอ
            <select className="selectAmphoe" onChange={this.onAmphoeChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select></div>
            <div className="line64">จังหวัด
            <select className="selectProvince" onChange={this.onProvinceChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select></div>
            <div className="line65">รหัสไปรษณีย์
            <input className="postal" type="text"value={postal} onChange={this.changeHandler}></input></div>
            
            <div className="line3">
            <div className="BDay">วันที่ย้ายเข้า </div>
            <DatePicker className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
                        </div>
                        </div>
            <div className="iconNext6">
              <Link to={"/travel"}>
                <button className="next6" type="submit" onClick={this.connect}><img className="INext6" src={buttonNext}/></button>
                </Link>
                </div>
        </div>
        </form>
    );
  }
}

export default Immigration;
