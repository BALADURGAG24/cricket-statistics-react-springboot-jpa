import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { Login } from "./Login";
import { Register } from "./Register";

import ListCricinfoComponent from "./components/ListCricinfoComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateCricinfoComponent from "./components/CreateCricinfoComponent";
import UpdateCricinfoComponent from "./components/UpdateCricinfoComponent";
import ViewCricinfoComponent from "./components/ViewCricinfoComponent";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            {/* Login and Register Toggle */}
            <Route path="/" exact>
              {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <Register onFormSwitch={toggleForm} />
              )}
            </Route>

            {/* Cricinfo Routes */}
            <Route path="/cricinfos" component={ListCricinfoComponent} />
            <Route path="/add-cricinfo/:id" component={CreateCricinfoComponent} />
            <Route path="/view-cricinfo/:id" component={ViewCricinfoComponent} />
            <Route path="/update-cricinfo/:id" component={UpdateCricinfoComponent} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
