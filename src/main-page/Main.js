import Nav from "../component/nav/Nav";

import Movies from "./Movies";
import "./Main.scss";
import HeroImg from "./HeroImg";

const Main = () => {
  return (
    <div className="main__container">
      <Nav />
      <HeroImg/>
      <Movies title="NETFLIX ORIGINALS" />
      <Movies title="Top Rated" />
      <Movies title="Comedy Movies" />
      <Movies title="Horror Movies" />
      <Movies title="Action Movies" />
    </div>
  );
};

export default Main;
