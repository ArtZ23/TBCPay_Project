import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/contacts/Registration/Registration";
import Contacts from "./components/contacts/Contacts";
import Header from "./layout/Navbar/Header";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <div>
        <Router>
          <Header />
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/register" component={Registration} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
