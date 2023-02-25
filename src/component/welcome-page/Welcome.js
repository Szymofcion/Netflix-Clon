import WelcomeTitle from "./WelcomeTitle";
import WelcomeText from "./WelcomeText";
// import Slick from './Slick';
import { Fragment } from "react";
import "./Welcome.scss";
const Welcome = () => {
  return (
    <Fragment>
      <div className="shadow"></div>
      <div className="container__heroImg">
        <WelcomeTitle />
        <WelcomeText />
      </div>
    </Fragment>
  );
};

export default Welcome;
