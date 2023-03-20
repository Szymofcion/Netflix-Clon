import Nav from "../component/nav/Nav";

import Movies from "./Movies";
import "./Main.scss";
import HeroImg from "./HeroImg";

const Main = ({user, logout}) => {

  return (
    <div className="main__container">
      <Nav user={user} logout={logout} />
      <HeroImg/>
      <Movies />
    </div>
  );
};

export default Main;
