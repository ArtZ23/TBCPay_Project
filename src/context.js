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
        number: "012345678911",
        gender: "male",
        dob: "07/23/1999",
        birthlocation: "თბილისი",
        location: {
          city: "თბილისი",
          street: "ვაჟა-ფშაველა"
        }
      },
      {
        id: 2,
        name: "Tom Brown",
        number: "012911345678",
        gender: "male",
        dob: "10/25/1997",
        birthlocation: "თბილისი",
        location: {
          city: "თბილისი",
          street: "ვაჟა-ფშაველა"
        }
      },
      {
        id: 3,
        name: "Michael Smith",
        number: "567891101234",
        gender: "male",
        dob: "12/1/2001",
        birthlocation: "თბილისი",
        location: {
          city: "თბილისი",
          street: "ვაჟა-ფშაველა"
        }
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
