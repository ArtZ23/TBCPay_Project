import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Consumer } from "../../context";
import "./Addcontact.css";
import uuid from "uuid";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

class Addcontact extends Component {
  onSubmit = (dispatch, e) => {
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

    const newContact = {
      id: uuid(),
      name,
      surname,
      userid,
      gender,
      dob,
      birthlocation,
      city,
      street
    };

    Axios.post("http://localhost:3001/contacts", newContact).then(res =>
      dispatch({ type: "ADD_CONTACT", payload: newContact })
    );

    //redirectign to the Home page
    this.props.history.push("/");
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
          //checking if User Already Exist
          const { dispatch, contacts } = value;
          const ids = contacts.map(contact => contact.userid);
          const isUser = ids.indexOf(userid);
          //simple validation
          let validate;
          if (
            name.length === 0 ||
            surname.length === 0 ||
            userid.length !== 11 ||
            gender.length === 0 ||
            birthlocation.length === 0 ||
            city.length === 0 ||
            street.length === 0 ||
            isUser !== -1
          ) {
            validate = true;
          } else {
            validate = false;
          }

          return (
            <div className="container mt-5 container mt-5 text-center d-flex justify-content-center">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="card  w-100 ">
                  <div className="card-header">
                    მომხმარებელის დამატების წესები
                  </div>
                  <p>ყველა ველი აუცილებელია</p>
                  <p>არ გაამეოროთ პირადი ნომერი</p>
                  <p>პირადი ნომერი არ აღემატება 11 სიმბოლოს</p>
                  <p>თარიღი ვერ იქნება დღევანდელ თარიღზე მეტი</p>
                </div>

                <br />
                <br />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">სახელი</label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="სახელი"
                      value={name}
                      onChange={this.onChange}
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
                    <option>საქართველო</option>
                    <option>აშშ</option>
                    <option>დიდი ბრიტანეთი</option>
                    <option>ესპანეთი</option>
                    <option>იტალია</option>
                    <option>კანადა</option>
                    <option>ჩინეთი</option>
                    <option>იაპონია</option>
                    <option>კორეა</option>
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
                <button
                  disabled={validate}
                  type="submit"
                  className="btn btn-primary"
                >
                  რეგისტრაცია
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Addcontact;
