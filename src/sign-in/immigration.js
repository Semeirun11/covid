import React, { Component } from "react";
import axios from "axios";
import buttonNext from "./play-button.png"
import "./immigration.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
class Immigration extends Component {

  constructor(props){
    super(props)
    this.state={
      address:'',
      postal:'',
      provinceList : [],
      amphoeList:[],
      districtList:[],
      district: "",
      amphoe: "",
      province: "",
      travelling: localStorage.getItem("travelling"),
      interaction: localStorage.getItem("interaction"),
    }
    this.loadProvince();
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
  };
  onAmphoeChange = (e) => {
    this.setState({
      amphoe: e.target.value,
    })
  };
  onProvinceChange = (e) => {
    this.setState({
      province: e.target.value
    })
  };
  loadDistrict = async() =>{
    var districtList
    var response2
    response2 = await fetch(('http://localhost:8088/address?province='+this.state.province+'&amphoe='+this.state.amphoe))
    districtList = await response2.json()
    this.setState({
      districtList : districtList
    })
  }
  loadAmphoe = async() =>{
    var amphoeList
    var response1
    response1 = await fetch(('http://localhost:8088/address?province='+this.state.province))
    amphoeList = await response1.json()
    this.setState({
      amphoeList : amphoeList
    })
  }
  
  loadProvince=async()=>{
    var provinceList
    var response
    response = await fetch('http://localhost:8088/address')
    provinceList = await response.json()
    this.setState({
      provinceList : provinceList
    })
    
  }
  
  connect=async()=> {
    await axios.get(('http://localhost:8088/address?province='+this.state.province+'&amphoe='+this.state.amphoe+'&district='+this.state.district), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    var data = this.state
    console.log(this.state)
    axios.post("http://localhost:8088/accommodation", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
    if(this.state.travelling=="true"){
      console.log("gg")
      window.location.href = `/Travel`;
    }
    if(this.state.travelling=="false"&&this.state.interaction=="true"){
      console.log("hh")
      window.location.href = `/Interaction`;
    }
    if(this.state.travelling=="false"&&this.state.interaction=="false"){
      window.location.href = `/history`;
    }
  };

  render() {
    const {districtList,
      provinceList,
      amphoeList,address,postal}=this.state
    return (
      <div className="bgSignupInfo6">
            <div className="dailyQuestion4">รายละเอียดที่พัก</div>
            <div className="answer6">
            <div className="line61"><div className="address1">ตั้งอยู่ที่</div></div>
            <div className="line62"><input className="address" type="text"value={address} onChange={this.changeHandler}></input></div>
            <div className="line64">จังหวัด
            <select className="selectProvince" onChange={this.onProvinceChange} onClick={this.loadAmphoe}>
            <option value="null">จังหวัด</option>
            { provinceList && provinceList.map(el => <option value={el}>{el}</option>) }
            </select></div>
            <div className="line63">อำเภอ
            <select className="selectAmphoe" onChange={this.onAmphoeChange} onClick={this.loadDistrict}>
            <option value="null">อำเภอ</option>
            { amphoeList && amphoeList.map(el => <option key={el} value={el}>{el}</option>) }
            </select></div>
            <div className="line63">ตำบล
            <select className="selectDistrict" onChange={this.onDistrictChange}>
            <option value="null">ตำบล</option>
            { districtList && districtList.map(el => <option value={el}>{el}</option>) }
            </select></div>
           
            
            <div className="line65">รหัสไปรษณีย์
            <input className="postal" type="text"value={postal} onChange={this.changeHandler}></input></div>
            
            <div className="line66">
            <div className="BDay">วันที่ย้ายเข้า 
            <DatePickerInput className="inputDate"
                            selected={this.state.endDate}
                            onChange={this.dateChange}
                        />
                        </div>
                        </div>
                        </div>
            <div className="iconNext6">
                <button className="next6" type="submit" onClick={this.connect}><img className="INext6" src={buttonNext}/></button>
                </div>
        </div>
    );
  }
}

export default Immigration;
