import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
import "./history.css";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseImmigration:[],
      responseTravelling: [],
      responseInteraction :[],
      responseSymptom: [],
      id:localStorage.getItem("id"),
      date:localStorage.getItem("date"),
    }
    this.loadDataResult(); 
  }
  onClickLockout=async()=>{
    await axios.get(('http://localhost:8088/sign-out'), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    window.location.href=`/`
  }

  loadDataResult=async()=>{
    var responseImmigration = await axios.get(('http://localhost:8088/immigration?assessment_id='+this.state.id), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    var responseTravelling = await axios.get(('http://localhost:8088/travelling?assessment_id='+this.state.id), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    var responseInteraction = await axios.get(('http://localhost:8088/interaction?assessment_id='+this.state.id), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    var responseSymptom = await axios.get(('http://localhost:8088/symptom?assessment_id='+this.state.id), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    this.setState({
        responseImmigration : responseImmigration.data,
        responseTravelling : responseTravelling.data,
        responseInteraction : responseInteraction.data,
        responseSymptom : responseSymptom.data,

    });
    console.log("Immigration")
    // console.log(responseImmigration.data[0].address)
    console.log("Travelling")
    console.log(responseTravelling.data)
    console.log("Interaction")
    console.log(responseInteraction.data)
    console.log("Symptom")
    console.log(responseSymptom.data)
  }

  
  render() {
    const {
        responseImmigration,
        responseTravelling ,
        responseInteraction ,
        responseSymptom ,
      } = this.state;
    return (<div className="historyBackground">
        <div className="topBar"><div className="userName">DanuwaHeng</div><div className="logOut" onClick={this.onClickLockout}>Log out</div></div>
        <div className="resultDetailHistory">
          <div className="dateDetail"> ข้อมูลของวันที่ : {this.state.date}</div>
            <div className="headSymptom">รายละเอียดอาการผิดปกติ</div>
            {responseSymptom && responseSymptom.map(data => <div key={data._id}>
                <div className="responseSymptom">
                <div>{data.isolation==="false" ? 'ไม่ได้รับคำแนะนำ' : 'ได้รับคำแนะนำ'}</div>
                <div>{data.ache==="false" ? '' : 'อาการปวดเมื่อยกล้ามเนื้อ : มี'}</div>
                <div>{data.boredFood==="false" ? '' : 'อาการเบื่ออาหาร : มี'}</div>
                <div>{data.fever==="false" ? '' : 'อาการไข้ : มี'}</div>
                <div>{data.headache==="false" ? '' : 'อาการปวดหัว : มี'}</div>
                <div>{data.sleepless==="false" ? '' : 'อาการนอนไม่หลับ : มี'}</div>
                <div>{data.snot==="false" ? '' : 'มีน้ำมูก : มี'}</div>
                <div>{data.soreThroat==="false" ? '' : 'อาการเจ็บคอ : มี'}</div>
                <div>{data.steam==="false" ? '' : 'อาการไอ : มี'}</div>
                <div>{data.tired==="false" ? '' : 'อาการเหนื่อย หรือหายใจหอบ : มี'}</div>
                <div>{data.weary==="false" ? '' : 'อาการปวดหัว : มี'}</div>
                <div> {data.d_other===""? '' : "อาการอื่น ๆ :"+data.d_other}</div>
                <div>{data.isolation_date===""?'':"วันที่รับคำแนะนำ : "+ data.isolation_date}</div>
                <div>{data.isolation_place===""?'':"สถานที่ที่ได้รับคำแนะนำ : "+ data.isolation_place}</div>
                </div></div>
                )}
            <div className="headTravelling">รายละเอียดการเดินทาง</div>
            {responseTravelling && responseTravelling.map(data => <div key={data._id}>
                <div className="responseTravelling">
                <div>{data.address==="" ? '' : 'สถานที่ : '+ data.address}</div>
                <div>{data.place_type===null ? '' : 'ประเภทของสถานที่ :' + data.place_type}</div>
                <div>ประเภทของยานพาหนะที่ใช้เดินทาง : {data.travel_type}</div>
                <div>{data.departure_date==="" ? '' : 'วันที่ออกเดินทาง : '+ data.departure_date}</div>
                <div>{data.arrival_date==="" ? '' : 'วันที่กลับ : '+data.arrival_date}</div>
                </div></div>
                )}
            <div className="headInteraction">รายละเอียดการสัมผัสกลุ่มเสี่ยง</div>
            {responseInteraction && responseInteraction.map(data => <div key={data._id}>
                <div className="responseInteraction">
                <div>{data.address==="" ? '' : 'สถานที่ : '+ data.address}</div>
                <div>{data.date==="" ? '' : 'วันที่สัมผัสกลุ่มเสี่ยง :' + data.date}</div>
                </div></div>
                )}
            <div className="headImmigration">รายละเอียดการย้ายที่อยู่</div>
            {responseImmigration && responseImmigration.map(data => <div key={data._id}>
                <div className="responseImmigration">
                <div>{data.address==="" ? '' : 'มีการย้ายที่อยู่ :'}
                {data.date==="" ? '' : ' วันที่' + data.date}</div>
                </div></div>
                )}
            </div>
            
            <div className="buttomBar"> สายด่วนป่วน Freefire :</div>
    </div>)

  }
}

export default History;
