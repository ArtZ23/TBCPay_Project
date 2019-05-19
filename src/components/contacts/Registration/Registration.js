import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./Registration.css";
import "react-datepicker/dist/react-datepicker.css";
import Contact from "../Contact";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  state = {
    name: "",
    number: "",
    gender: "",
    dob: "",
    birthlocation: "",
    location: {
      city: "",
      street: ""
    }
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container mt-5 container mt-5 text-center d-flex justify-content-center">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="name">სახელი</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="სახელი"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlfor="surname">გვარი</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="გვარი"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlfor="inputGender">სქესი</label>
            <select id="inputGneder" className="form-control">
              <option selected>Choose...</option>
              <option>მამრობითი</option>
              <option>მდედრობითი</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlfor="userid">პირადი ნომერი</label>
            <input
              type="text"
              className="form-control"
              id="userid"
              placeholder="პირადი ნომერი"
            />
            <br />
            <label id="datepickerlabel" htmlfor="datepicker">
              დაბადების თარიღი{" "}
            </label>
            <DatePicker
              id="datepicker"
              className="datepicker"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlfor="inputGender">დაბადების ადგილი</label>
            <select id="inputGneder" className="form-control">
              <option selected>Choose...</option>
              <option>მამრობითი</option>
              <option>მდედრობითი</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="inputCity">ქალაქი</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-6">
              <label htmlfor="inputCity">ქუჩა</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            რეგისტრაცია
          </button>
        </form>
      </div>
    );
  }
}
export default Registration;
