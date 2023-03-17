import Nav from "../component/nav/Nav";

import Movies from "./Movies";
import "./Main.scss";
import HeroImg from "./HeroImg";

const Main = () => {
  return (
    <div className="main__container">
      <Nav />
      <HeroImg/>
      <Movies />
    </div>
  );
};

export default Main;
