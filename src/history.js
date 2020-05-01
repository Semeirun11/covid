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
      resultHistory:[],
      id:''
    }
    this.loadDataResult(); 
  }


  loadDataResult=async()=>{
    var response = await axios.get(('http://localhost:8088/assessment'), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    this.setState({
      resultHistory : response.data
    });
    console.log("respoonse.data = ", response.data)
  }
  onClickLockout=async()=>{
    await axios.get(('http://localhost:8088/sign-out'), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    window.location.href=`/`
  }

  onClickDetail=async(e)=>{
     await this.setState({
      id: e.target.value,
    });
    
    if(this.state.id!=undefined){
      localStorage.setItem("id", this.state.id);
      console.log(this.state.id)
      window.location.href=`/detailResult`
    }
  }
  
  render() {
    const {
      resultHistory
    } = this.state;
    return (<div className="historyBackground">
        <div className="topBar"><div className="userName">DanuwaHeng</div><div className="logOut" onClick={this.onClickLockout}>Log out</div></div>
        <div className="resultHistory">
            <div className="headHistory">HISTORY</div>
            <div className="result">
                <div className="headResult">
                  <div className="date">วันที่</div> 
                  <div className="symptom">อาการผิดปกติ</div>
                  <div className="immigration"> เปลี่ยนที่พัก</div> 
                  <div className="travel">เดินทางไกล</div> 
                  <div className="interaction">ใกล้กลุ่มเสี่ยง</div> 
                </div>

               
                
                {resultHistory && resultHistory.map(data => <div key={data._id}>
                <button className="dataResult" onClick={this.onClickDetail} value={data._id}>
                <div className="dateStampHistory" value={localStorage.setItem("date", data.timestamp.substr(0, 10))} >{data.timestamp.substr(0, 10)}</div>
                <div className="symptomHistory">{data.symptom===true ? 'TRUE' : 'FALSE'}</div>
                <div className="immigrationHistory">{data.immigration===true ? 'TRUE' : 'FALSE'}</div>
                <div className="travellingHistory">{data.travelling===true ? 'TRUE' : 'FALSE'}</div>
                <div className="interactionHistory">{data.interaction===true ? 'TRUE' : 'FALSE'}</div>
                </button></div>
                )}
                
            </div>
            </div>
        <div className="buttomBar"> สายด่วนป่วน Freefire :</div>
    </div>)

  }
}

export default History;
