import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/Navbar/Header";
import NotFound from "./components/Notfound";
import Addcontact from "./components/contacts/Addcontact";
import Editcontact from "./components/contacts/Editcontact";
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
              <Route exact path="/adduser" component={Addcontact} />
              <Route exact path="/edituser/:id" component={Editcontact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
