import Nav from "../component/nav/Nav";

import Movies from "./Movies";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main__container">
      <Nav />
      <Movies />
      <Movies />
      <Movies />
      <Movies />
      <Movies />
    </div>
  );
};

export default Main;
