import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`http://localhost:3001/contacts/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
           
              <h4>
                <b>
                  {" "}
                  {contact.name} {contact.surname}
                </b>
                {/* setting the opposite value  */}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fa fa-sort-down"
                />
                <i
                  className="fa fa-times"
                  style={{ float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                />
                <Link to={`edituser/${contact.id}`}>
                  <i
                    className="fa fa-edit"
                    style={{
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                      marginTop: "0.2rem"
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    პირადი ნომერი: <b> {contact.userid}</b>
                  </li>
                  <li className="list-group-item">
                    სქესი: <b> {contact.gender}</b>
                  </li>
                  <li className="list-group-item">
                    დაბადების თარიღი :{" "}
                    <b
                      style={{
                        whiteSpace: "nowrap",
                        maxWidth: "8.4%",
                        overflow: "hidden",
                        display: "-webkit-box"
                      }}
                    >
                      {contact.dob}
                    </b>
                  </li>
                  <li className="list-group-item">
                    დაბადების ადგილი : <b> {contact.birthlocation}</b>
                  </li>
                  <li className="list-group-item">
                    მისამართი:{" "}
                    <b>
                      {" "}
                      {contact.city} , {contact.street}
                    </b>
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  error: PropTypes.string
};
export default Contact;
