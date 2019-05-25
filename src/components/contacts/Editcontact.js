import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Consumer } from "../../context";

import "./Addcontact.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class Editcontact extends Component {
  state = {
    name: "",
    surname: "",
    userid: "",
    gender: "",
    dob: "",
    birthlocation: "",
    city: "",
    street: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      userid: "",
      gender: "",
      birthlocation: "",
      city: "",
      street: "",
      dob: new Date()
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleChange = date => this.setState({ dob: date });

  async componentDidMount() {
    // get user ID
    const { id } = this.props.match.params;
    const res = await axios.get(`http://localhost:3001/contacts/${id}`);

    this.setState({
      name: res.data.name,
      surname: res.data.surname,
      userid: res.data.userid,
      gender: res.data.gender,
      // dob: res.data.dob,
      birthlocation: res.data.birthlocation,
      city: res.data.city,
      street: res.data.street
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const {
      name,
      surname,
      userid,
      gender,
      dob,
      birthlocation,
      city,
      street
    } = this.state;
    const updContact = {
      name,
      surname,
      userid,
      gender,
      dob,
      birthlocation,
      city,
      street
    };

    const { id } = this.props.match.params;
    // making an update request
    const res = await axios.put(
      `http://localhost:3001/contacts/${id}`,
      updContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    // Clear state
    this.setState({
      name: "",
      surname: "",
      userid: "",
      gender: "",
      dob: "",
      birthlocation: "",
      city: "",
      street: "",
      errors: {}
    });
    //redirectign to the Home page
    this.props.history.push("/");
  };
  render() {
    const {
      name,
      surname,
      userid,
      gender,
      dob,
      birthlocation,
      city,
      street
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container mt-5 container mt-5 text-center d-flex justify-content-center">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">სახელი</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control "
                      placeholder="სახელი"
                      value={name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="surname">გვარი</label>
                    <input
                      type="text"
                      name="surname"
                      className="form-control "
                      id="surname"
                      placeholder="გვარი"
                      value={surname}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="gender">სქესი</label>
                  <select
                    required
                    id="gender"
                    name="gender"
                    className="form-control "
                    value={gender}
                    onChange={this.onChange}
                  >
                    <option>სქესი...</option>
                    <option>მამრობითი</option>
                    <option>მდედრობითი</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="userid">პირადი ნომერი</label>
                  <input
                    required
                    type="number"
                    pattern="[0-9]*"
                    name="userid"
                    className="form-control "
                    id="userid"
                    placeholder="პირადი ნომერი"
                    value={userid}
                    onChange={this.onChange}
                  />
                  <br />
                  <label id="datepickerlabel" htmlFor="dob">
                    დაბადების თარიღი{" "}
                  </label>
                  <DatePicker
                    required
                    name="dob"
                    id="dob"
                    maxDate={this.state.dob}
                    className="datepicker "
                    selected={this.state.dob}
                    onChange={this.handleChange}
                    dateFormat="dd/MM/yyyy"
                    value={dob}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="birthlocation">დაბადების ადგილი</label>
                  <select
                    required
                    name="birthlocation"
                    id="birthlocation"
                    className="form-control "
                    value={birthlocation}
                    onChange={this.onChange}
                  >
                    <option>დაბადების ადგილი...</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>GEORGIA</option>
                    <option>SPAIN</option>
                    <option>ITALY</option>
                    <option>CANADA</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">ქალაქი</label>
                    <input
                      required
                      name="city"
                      type="text"
                      className="form-control "
                      placeholder="ქალაქი"
                      id="city"
                      value={city}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="street">ქუჩა</label>
                    <input
                      required
                      name="street"
                      type="text"
                      placeholder="ქუჩა"
                      className="form-control "
                      id="street"
                      value={street}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  განახლება
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Editcontact;
