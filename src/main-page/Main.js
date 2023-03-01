import Nav from "./Nav";
import Login from "../component/login-page/Login";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main__container">
      <Nav />
      <h2>Main</h2>
      <Login />
      <Login />
    </div>
  );
};

export default Main;
