import React, { Component } from "react";
import buttonNext from "./play-button.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./symptom.css";
class Symptom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d_other:''
    };
  }

  state = { fever: false }
  handleFeverChange = event =>
    this.setState({ fever: event.target.checked, })
    
    state = { steam: false }
  handleSteamChange = event =>
    this.setState({ steam: event.target.checked, })

    state = { soreThroat: false }
  handleSoreThroatChange = event =>
    this.setState({ soreThroat: event.target.checked, })

    state = { snot: false }
  handleSnotChange = event =>
    this.setState({ snot: event.target.checked, })


    state = { tired: false }
  handleTiredChange = event =>
    this.setState({ tired: event.target.checked, })
    
    state = { headache: false }
  handleHeadacheChange = event =>
    this.setState({ headache: event.target.checked, })

    state = { sleepless: false }
  handleSleeplessChange = event =>
    this.setState({ sleepless: event.target.checked, })

    state = { boredFood: false }
  handlerBoredFoodChange = event =>
    this.setState({ boredFood: event.target.checked, })


    state = { ache: false }
  handleAcheChange = event =>
    this.setState({ ache: event.target.checked, })
    
    state = { weary: false }
  handleWearyChange = event =>
    this.setState({ weary: event.target.checked, })

    handleClick = () => {
      localStorage.setItem("weary", this.state.weary);
      localStorage.setItem("ache", this.state.ache);
      localStorage.setItem("boredFood", this.state.boredFood);
      localStorage.setItem("sleepless", this.state.sleepless);
      localStorage.setItem("headache", this.state.headache);
      localStorage.setItem("tired", this.state.tired);
      localStorage.setItem("snot", this.state.snot);
      localStorage.setItem("soreThroat", this.state.soreThroat);
      localStorage.setItem("steam", this.state.steam);
      localStorage.setItem("fever", this.state.fever);
      localStorage.setItem("d_other", this.state.d_other);
    };

  render() {
    const {d_other}=this.state
    return (
      <form onSubmit={this.submitHandler}>
      <div className="bgSignupInfo4">
            <div className="dailyQuestion2">ลักษณะอาการเป็นอย่างไร ?</div>
            <div className="answer4">
            <div className="line41"><input type="checkbox" checked={this.state.checked} onChange={this.handleFeverChange}></input>ไข้</div>
            <div className="line42"><input type="checkbox" checked={this.state.checked} onChange={this.handleSteamChange}></input>ไอ</div>
            <div className="line43"><input type="checkbox" checked={this.state.checked} onChange={this.handleSoreThroatChange}></input>เจ็บคอ</div>
            <div className="line44"><input type="checkbox" checked={this.state.checked} onChange={this.handleSnotChange}></input>มีน้ำมูก</div>
            <div className="line45"><input type="checkbox" checked={this.state.checked} onChange={this.handleTiredChange}></input>เหนื่อย หรือหายใจหอบ</div>
            <div className="line46"><input type="checkbox" checked={this.state.checked} onChange={this.handleHeadacheChange}></input>ปวดศรีษะ</div>
            <div className="line47"><input type="checkbox" checked={this.state.checked} onChange={this.handleSleeplessChange}></input>นอนไม่หลับ</div>
            <div className="line48"><input type="checkbox" checked={this.state.checked} onChange={this.handlerBoredFoodChange}></input>เบื่ออาหาร</div>
            <div className="line49"><input type="checkbox" checked={this.state.checked} onChange={this.handleAcheChange}></input>ปวดเมื่อยกล้ามเนื้อ</div>
            <div className="line410"><input type="checkbox" checked={this.state.checked} onChange={this.handleWearyChange}></input>อ่อนเพลีย</div>
            <div className="line411">อื่น ๆ</div>
            <input className="d_other" type="text"value={d_other} onChange={this.changeHandler}></input>
            </div>
            <div className="iconNext4">
              <Link to={"/Isolation"}>
              <button className="next4" type="submit">
                <img className="INext4" src={buttonNext} onClick={this.handleClick}/>
                </button>
                </Link>
                </div>
        </div>
        </form>
    );
  }
}

export default Symptom;
