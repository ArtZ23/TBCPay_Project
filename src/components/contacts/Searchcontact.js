import React, { Component } from "react";

class Searchcontact extends Component {
  state = {
    queryname: "",
    data: [],
    filteredData: []
  };

  FindWithName = event => {
    //get value from input
    const queryname = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.surname.includes(queryname);
      });

      return {
        queryname,
        filteredData
      };
    });
  };

  getName = () => {
    fetch(`http://localhost:3001/contacts`)
      .then(response => response.json())
      .then(data => {
        const { queryname } = this.state;
        const filteredData = data.filter(element => {
          return element.surname.includes(queryname);
        });

        this.setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    this.getName();
  }

  render() {
    return (
      <div className="searchForm">
        <input
          type="text"
          className="form-control"
          placeholder="საძიებო ფორმა"
          value={this.state.querynamename}
          onChange={this.FindWithName}
        />
        <br />

        <table class="table table-striped table-dark">
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
                <tr>
                  <td>{l.name}</td>
                  <td>{l.surname}</td>
                  <td>{l.userid}</td>
                  <td>{l.gender}</td>
                  <td
                    style={{
                      overflow: "hidden",
                      width: "44%",
                      whiteSpace: "nowrap",
                      display: "-webkit-box"
                    }}
                  >
                    {l.dob}
                  </td>
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
