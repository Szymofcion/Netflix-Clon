import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Welcome from "./component/welcome-page/Welcome";
import Login from "./login-page/Login";
import SelectProfil from "./select-profil-page/SelectProfil";
import Main from "./main-page/Main";


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
