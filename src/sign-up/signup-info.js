import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./signup-info.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
      address_id: "",
      district: "",
      amphoe: "",
      province: "",
      postal: "",
      num_live: "",
      email:""
    };
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
  // onPWChange = (e) => {
  //   this.setState({
  //     password: 1010,
  //   });
  // }
  onDistrictChange = (e) => {
    this.setState({
      district: e.target.value,
    });
  };
  onAmphoeChange = (e) => {
    this.setState({
      amphoe: e.target.value,
    });
  };
  onProvinceChange = (e) => {
    this.setState({
      province: e.target.value,
    });
  };
  onnum_liveChange = (e) => {
    this.setState({
      num_live: e.target.value,
    });
  };
  loadProvince = async() =>{
    var provinceList = "";
    var data = "";
    data = await fetch('http://localhost:8088/address')
    provinceList = await data.json()
    console.log(provinceList)
  }

  connect=()=> {
    var data = this.state
    console.log(this.state)
    axios.post("http://localhost:8088/sign-up", JSON.stringify(data),{withCredentials:true,headers: {"Content-Type": "application/json"}})
  };
  

  render() {
    const {
      provinceList,
      name,
      personal_id,
      password,
      telephone,
      address_id,
      email,
      amphoe,
      province,
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
              <DatePicker
                className="inputDate"
                selected={this.state.endDate}
                onChange={this.dateChange}
              />
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
              <div className="address">ที่อยู่ปัจจุบัน</div>
              <input
                className="address_id"
                type="text"
                value={address_id}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="line7">
              <div className="district1">ตำบล</div>
              <select className="district" onChange={this.onDistrictChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="amphoe1">อำเภอ</div>
              <select className="amphoe" onChange={this.onAmphoeChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="province1">จังหวัด</div>
              <select className="province" onChange={this.onProvinceChange}>
                {this.provinceList.map( p1=> (
                  (
                    <option key={p1} value={p1}> {p1} </option>
                  )
                ))}
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
              </select>
              คน
            </div>
            {/* <Link to={"/"}> */}
            <button className="next" type="submit" onClick={this.loadProvince}>
              NEXT
            </button>
            {/* </Link> */}
          </div>

      </div>
    );
  }
}

export default User;
