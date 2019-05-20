import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Consumer } from "../../context";
import classnames from "classnames";
import "./Addcontact.css";
import uuid from "uuid";
import "react-datepicker/dist/react-datepicker.css";

class Addcontact extends Component {
  state = {
    name: "",
    surname: "",
    userid: "",
    gender: "",
    dob: "",
    birthlocation: "",
    city: "",
    street: "",
    errors: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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
      street,
      errors
    } = this.state;
    //User Validation
    if (name.length === 0) {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }

    if (surname.length === 0) {
      this.setState({ errors: { surname: "Surname is Required" } });
      return;
    }
    if (userid.length === 0 || userid.length !== 11) {
      this.setState({ errors: { userid: "Userid is Required" } });
      return;
    }
    if (gender.length === "") {
      this.setState({ errors: { gender: "Gender is Required" } });
      return;
    }
    // Must be Modified !!
    // if (dob.length === "") {
    //   this.setState({ errors: { dob: "DateOFBirth is Required" } });
    //   return;
    // }
    if (birthlocation.length === "") {
      this.setState({ errors: { birthlocation: "Birthlocation is Required" } });
      return;
    }
    if (city.length === "") {
      this.setState({ errors: { city: "City is Required" } });
      return;
    }
    if (street.length === "") {
      this.setState({ errors: { street: "Street is Required" } });
      return;
    }
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
    dispatch({ type: "ADD_CONTACT", payload: newContact });
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
      street,
      errors
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { nameError } = this.state;
          return (
            <div className="container mt-5 container mt-5 text-center d-flex justify-content-center">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlfor="name">სახელი</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={classnames("form-control ", {
                        "is-invalid": errors
                      })}
                      placeholder="სახელი"
                      value={name}
                      onChange={this.onChange}
                      error={errors}
                    />
                    <div className="invalid-feedback"> Enter Name</div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlfor="surname">გვარი</label>
                    <input
                      type="text"
                      name="surname"
                      className={classnames("form-control ", {
                        "is-invalid": errors
                      })}
                      id="surname"
                      placeholder="გვარი"
                      value={surname}
                      onChange={this.onChange}
                      error={errors}
                    />
                    <div className="invalid-feedback"> Enter Surname</div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlfor="gender">სქესი</label>
                  <select
                    id="gender"
                    name="gender"
                    className={classnames("form-control ", {
                      "is-invalid": errors
                    })}
                    value={gender}
                    onChange={this.onChange}
                    error={errors}
                  >
                    <option selected>სქესი...</option>
                    <option>მამრობითი</option>
                    <option>მდედრობითი</option>
                  </select>
                  <div className="invalid-feedback"> Enter Surname</div>
                </div>
                <div className="form-group">
                  <label htmlfor="userid">პირადი ნომერი</label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name="userid"
                    className={classnames("form-control ", {
                      "is-invalid": errors
                    })}
                    id="userid"
                    placeholder="პირადი ნომერი"
                    value={userid}
                    onChange={this.onChange}
                    error={errors}
                  />
                  <div className="invalid-feedback"> Enter Surname</div>
                  <br />
                  <label id="datepickerlabel" htmlfor="datepicker">
                    დაბადების თარიღი{" "}
                  </label>
                  <DatePicker
                    name="dob"
                    id="dob"
                    className={classnames("datepicker ", {
                      "is-invalid": errors
                    })}
                    selected={dob}
                    onChange={this.onChange}
                    value={this.state.dob}
                    error={errors}
                  />
                  <div className="invalid-feedback"> Enter date of Birth</div>
                </div>
                <div className="form-group">
                  <label htmlfor="birthlocation">დაბადების ადგილი</label>
                  <select
                    name="birthlocation"
                    id="birthlocation"
                    className={classnames("form-control ", {
                      "is-invalid": errors
                    })}
                    value={birthlocation}
                    onChange={this.onChange}
                    error={errors}
                  >
                    <option selected>დაბადების ადგილი...</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <div className="invalid-feedback"> Enter Birth Location</div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlfor="city">ქალაქი</label>
                    <input
                      name="city"
                      type="text"
                      className={classnames("form-control ", {
                        "is-invalid": errors
                      })}
                      id="city"
                      value={city}
                      onChange={this.onChange}
                      error={errors}
                    />
                    <div className="invalid-feedback"> Enter City</div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlfor="street">ქუჩა</label>
                    <input
                      name="street"
                      type="text"
                      className={classnames("form-control ", {
                        "is-invalid": errors
                      })}
                      id="street"
                      value={street}
                      onChange={this.onChange}
                      error={errors}
                    />
                    <div className="invalid-feedback"> Enter Street</div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
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
