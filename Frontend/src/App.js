import { Route, Switch, BrowserRouter } from "react-router-dom";
import Welcome from "./component/welcome-page/Welcome";
import Registration from "./registration-page/Registration";
import Login from "./login-page/Login";
import SelectProfil from "./select-profil-page/SelectProfil";
import Main from "./main-page/Main";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const onLogin = (user) => {
    setUser(user);
  };
  // const onLogout = () => {
  //   setUser();
  // };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {user ? <SelectProfil user={user} /> : <Login onLogin={onLogin} />}
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/registraion">
          <Registration />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
