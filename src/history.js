import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'rc-datepicker/lib/style.css';
import 'moment/locale/th.js'
import {DatePickerInput } from 'rc-datepicker';
import moment from "moment";
import "./history.css";
class History extends Component {

  render() {
    return (<div className="historyBackground">
        <div className="topBar"><div className="userName">ทรงพระเจริญ</div></div>
        <div className="resultHistory">
            <div className="headHistory">ยิ่งยืนนานยิ่งเมื่อย</div>
            <div className="result">
                <div className="headResult"><div className="date">วันที่</div> <div className="symptom">อาการผิดปกติ</div><div className="immigration"> เปลี่ยนที่พัก</div> <div className="travel">เดินทางไกล</div> <div className="interaction">ใกล้กลุ่มเสี่ยง</div> </div>
                <div className="dataResult"></div>
            </div>
            </div>
        <div className="buttomBar"></div>
    </div>)

  }
}

export default History;
