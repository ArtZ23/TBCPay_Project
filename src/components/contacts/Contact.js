import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = (id, dispatch) => {
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
                {contact.name} {/* setting the opposite value  */}
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
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    პირადი ნომერი: {contact.number}
                  </li>
                  <li className="list-group-item">სქესი: {contact.gender}</li>
                  <li className="list-group-item">
                    დაბადების თარიღი : {contact.dob}
                  </li>
                  <li className="list-group-item">
                    დაბადების ადგილი : {contact.birthlocation}
                  </li>
                  <li className="list-group-item">
                    მისამართი: {contact.location.city} ,{" "}
                    {contact.location.street}
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
  contact: PropTypes.object.isRequired
};
export default Contact;
