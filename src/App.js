import { Route, Switch,BrowserRouter } from "react-router-dom";
import Welcome from "./component/welcome-page/Welcome";
import Login from "./login-page/Login";
import SelectProfil from "./select-profil-page/SelectProfil";
import Main from "./main-page/Main";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const onLogin = (user) => {
    setUser(user);
  };
  const onLogout = () => {
    setUser();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/selectProfil">
          <SelectProfil />
        </Route>
        <Route path="/login">
          <Login user={user} onLogin={onLogin} />
        </Route>
        <Route path="/main">
          <Main user={user} logout={onLogout} />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
