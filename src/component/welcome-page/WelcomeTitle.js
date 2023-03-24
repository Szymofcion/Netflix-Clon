import { Link } from "react-router-dom";
import netflixTitle from "../img/netflixTitle.png";
import "./WelcomeTitle.scss";

const WelcomeTitle = () => {
  return (
    <div className="container">
      <img
        src={netflixTitle}
        className="container__netflix"
        alt="logo netflixa"
      ></img>
      <Link to="/login" className="container__text">
        Zaloguj się
      </Link>
    </div>
  );
};

export default WelcomeTitle;
