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
      resultHistory:[]
    }
    this.loadDataResult(); 
  }
  loadDataResult=async()=>{
    var response = await axios.get(('http://localhost:8088/assessment'), {withCredentials:true,headers: {"Content-Type": "application/json"}});
    this.setState({
      resultHistory : response.data
    });

    console.log("respoonse.data = ", response.data)
    // console.log("onload = ", this.state)
  }
  // loopForImmigration=()=>{
  //   var i
  //   console.log(this.state.response[0])
  //   for(i=0;i<=this.state.response.length-1;i++){
  //     return <div>{this.state.response[i].immigration}</div>
  //   }
  // }

  render() {
    const {
      resultHistory
    } = this.state;
    return (<div className="historyBackground">
        <div className="topBar"><div className="userName">DanuwaHeng</div><div className="userName">Log out</div></div>
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
                <div className="dataResult">
                <div className="dateStampHistory">{data.timestamp.substr(0, 10)}</div>
                <div className="symptomHistory">{data.symptom===true ? 'TRUE' : 'FALSE'}</div>
                <div className="immigrationHistory">{data.immigration===true ? 'TRUE' : 'FALSE'}</div>
                <div className="travellingHistory">{data.travelling===true ? 'TRUE' : 'FALSE'}</div>
                <div className="interactionHistory">{data.interaction===true ? 'TRUE' : 'FALSE'}</div>
                </div></div>
                )}
                
            </div>
            </div>
        <div className="buttomBar"> สายด่วนป่วน Freefire :</div>
    </div>)

  }
}

export default History;
