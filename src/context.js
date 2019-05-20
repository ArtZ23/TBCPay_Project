import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        userid: "012345678911",
        gender: "male",
        dob: "07/23/1999",
        birthlocation: "თბილისი",
        city: "თბილისი",
        street: "ვაჟა-ფშაველა"
      },
      {
        id: 2,
        name: "Tom Brown",
        userid: "012911345678",
        gender: "male",
        dob: "10/25/1997",
        birthlocation: "თბილისი",
        city: "თბილისი",
        street: "ვაჟა-ფშაველა"
      },
      {
        id: 3,
        name: "Michael Smith",
        userid: "567891101234",
        gender: "male",
        dob: "12/1/2001",
        birthlocation: "თბილისი",
        city: "თბილისი",
        sreet: "ვაჟა-ფშაველა"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
