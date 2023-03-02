import Nav from "../component/nav/Nav";
import Login from "../login-page/Login";
import Movies from "./Movies";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main__container">
      <Nav />
      <Movies />
      <Login />
      <Login />
      <Login />
      <Login />
    </div>
  );
};

export default Main;
