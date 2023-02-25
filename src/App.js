import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";

import Welcome from "./component/welcome-page/Welcome";
import Login from "./component/login-page/Login";
import SelectProfil from "./component/select-profil-page/SelectProfil";
import Main from "./main-page/Main";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/selectProfil">
          <SelectProfil />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
