import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./signup-info.css";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
import axios from "axios";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password:"",
      personal_id: "",
      job: "",
      telephone: "",
      address: "",
      district: "",
      amphoe: "",
      province: "",
      provinceList : [],
      amphoeList:[],
      districtList:[],
      postal: "",
      num_live: "",
      email:""
    };

    this.loadProvince();
  }

  state = {
    endDate: new Date(),
  };

  dateChange = (date) => {
    console.log(moment(date).format("DD-MM-YYYY"));
    this.setState({
      endDate: date,
      birthday: moment(date).format("DD-MM-YYYY"),
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.className]: e.target.value });
  };
  onSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    });
  };
  onJobChange = (e) => {
    this.setState({
      job: e.target.value,
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
  onnum_liveChange = (e) => {
    this.setState({
      num_live: e.target.value,
    });
  };
  loadDistrict = async() =>{
    var districtList
    var response2
    response2 = await fetch(('http://aiecovid.com:8088/address?province='+this.state.province+'&amphoe='+this.state.amphoe))
    districtList = await response2.json()
    this.setState({
      districtList : districtList
    })
  }
  loadAmphoe = async() =>{
    var amphoeList
    var response1
    response1 = await fetch(('http://aiecovid.com:8088/address?province='+this.state.province))
    amphoeList = await response1.json()
    this.setState({
      amphoeList : amphoeList
    })
  }
  
  loadProvince=async()=>{
    var provinceList
    var response
    response = await fetch('http://aiecovid.com:8088/address')
    provinceList = await response.json()
    this.setState({
      provinceList : provinceList
    })
    
  }

  connect=async()=> {
    await axios.get(('http://aiecovid.com:8088/address?province='+this.state.province+'&amphoe='+this.state.amphoe+'&district='+this.state.district), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    var data = this.state
    console.log(this.state)
    await axios.post("http://aiecovid.com:8088/sign-up", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
    await axios.post("http://aiecovid.com:8088/sign-in", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
  };
  

  render() {
    const {
      name,
      personal_id,
      password,
      telephone,
      address,
      email,
      amphoe,
      province,
      districtList,
      provinceList,
      amphoeList,
      postal,
      num_live,
    } = this.state;


    return (
      <div className="bgSignupInfo">
          <div className="head">SIGN UP</div>
          <div className="content-regis">
            <div className="line1">
              <div className="name1">ชื่อ - นามสกุล</div>
              <input
                className="name"
                type="text"
                value={name}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line2">
              <div className="idCard">หมายเลขบัตรประชาชน</div>
              <input  
                className="personal_id"
                type="text"
                value={personal_id}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line2">
              <div className="idCard">Email</div>
              <input  
                className="email"
                type="text"
                value={email}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line2">
              <div className="idCard">รหัสผ่าน</div>
              <input  
                className="password"
                type="password"
                value={password}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line3">
              <div className="BDay">วัน/เดือน/ปี เกิด </div>
              <div className="space">
              <DatePickerInput
                className='my-custom-datepicker-component'
                selected={this.state.endDate}
                onChange={this.dateChange}
              />
              </div>
              <div className="sex">เพศ</div>
              <div className="selectSex">
                <input
                  type="radio"
                  value="male"
                  checked={this.state.sex === "male"}
                  onChange={this.onSexChange}
                  name="sex"
                />
                ชาย
                <input
                  type="radio"
                  value="female"
                  checked={this.state.sex === "female"}
                  onChange={this.onSexChange}
                  name="sex"
                />
                หญิง
              </div>
            </div>
            <div className="line4">
              <div className="job1">อาชีพ</div>
              <select className="job" onChange={this.onJobChange}>
                <option value="null">(เลือกอาชีพ)</option>
                <option value="Guide">ไกด์</option>
                <option value="Sell online">ขายของออนไลน์</option>
                <option value="Merchant">ค้าขาย</option>
                <option value="Taxi">คนขับรถรับจ้าง</option>
                <option value="Police">ตำรวจ</option>
                <option value="Nurse">พยาบาล</option>
                <option value="Student">นักศึกษา</option>
                <option value="Soilder">ทหาร</option>
                <option value="Doctor">หมอ</option>
                <option value="๊Unemployed">ว่างงาน</option>
                <option value="Freedom">อาชีพอิสระ</option>
                <option value="Teacher">อาจารย์</option>
                <option value="Other">อื่น ๆ</option>
              </select>
            </div>
            <div className="line5">
              <div className="phone">หมายเลขโทรศัพท์</div>
              <input
                className="telephone"
                type="text"
                value={telephone}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line6">
              <div className="address1">ที่อยู่ปัจจุบัน</div>
              <input
                className="address"
                type="text"
                value={address}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line7">
            <div className="province1">จังหวัด</div>
              <select className="province" onChange={this.onProvinceChange} onClick={this.loadAmphoe}>
                <option value="null">จังหวัด</option>
                { provinceList && provinceList.map(el => <option value={el}>{el}</option>) }
              </select>
              <div className="amphoe1">อำเภอ</div>
              <select className="amphoe" onChange={this.onAmphoeChange} onClick={this.loadDistrict}>
              <option value="null">อำเภอ</option>
                { amphoeList && amphoeList.map(el => <option key={el} value={el}>{el}</option>) }
              </select>
              <div className="district1">ตำบล</div>
              <select className="district" onChange={this.onDistrictChange}>
              <option value="null">ตำบล</option>
                { districtList && districtList.map(el => <option value={el}>{el}</option>) }
              </select>
            </div>
            <div className="line5">
              <div className="postal1">รหัสไปรษณีย์</div>
              <input
                className="postal"
                type="text"
                value={postal}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line8">
              <div className="num_live1">จำนวนผู้อยู่อาศัยร่วมกัน</div>
              <select className="num_live" onChange={this.onnum_liveChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              คน
            </div>
            <Link to={"/Disease"}>
            <button className="next" type="submit" 
            onClick={this.connect}
            >
              NEXT
            </button>
            </Link>
          </div>

      </div>
    );
  }
}

export default User;
