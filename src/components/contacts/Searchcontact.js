import React, { Component } from "react";
import axios from "axios";

class Searchcontact extends Component {
  state = {
    queryname: "",
    data: [],
    filteredData: []
  };

  FindUser = async event => {
    //get value from input
    const queryname = event.target.value;
    const res = await axios.get("http://localhost:3001/contacts");
    const { data } = res;
    const filteredData = data.filter(element => {
      return (
        element["name"].includes(queryname) ||
        element["surname"].includes(queryname) ||
        element["userid"].includes(queryname) ||
        element["gender"].includes(queryname) ||
        element["birthlocation"].includes(queryname) ||
        element["city"].includes(queryname)
      );
    });

    this.setState({
      queryname,
      filteredData,
      data
    });
  };

  render() {
    return (
      <div className="searchForm">
        <input
          type="text"
          className="form-control"
          placeholder="საძიებო ფორმა"
          value={this.state.queryname}
          onChange={this.FindUser}
        />
        <br />

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>სახელი</th>
              <th>გვარი</th>
              <th>პირადი ნომერი</th>
              <th>სქესი</th>
              <th>დაბადების თარიღი</th>
              <th>დაბადების ადგილი</th>
              <th>ქალაქი</th>
              <th>ქუჩა</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredData.map(l => {
              return (
                <tr key={l.id}>
                  <td>{l.name}</td>
                  <td>{l.surname}</td>
                  <td>{l.userid}</td>
                  <td>{l.gender}</td>
                  <td>{l.dob.substring(0, 10)}</td>
                  <td>{l.birthlocation}</td>
                  <td>{l.city}</td>
                  <td>{l.street}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Searchcontact;
