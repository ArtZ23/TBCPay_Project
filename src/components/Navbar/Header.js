import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div className="main">
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <button
          id="button"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i id="home" className="fa fa-home" />
                Home
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn  btn-outline-primary my-2 my-sm-0"
              type="submit"
              style={{
                borderColor: "rgb(0,173,238)",
                color: "rgb(0,173,238)"
              }}
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fa fa-user" id="user" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-default">
                <Link className="dropdown-item" to="/adduser">
                  Add user
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
