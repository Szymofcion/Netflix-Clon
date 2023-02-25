import { Link } from "react-router-dom";

import "./WelcomeTitle.scss";

const WelcomeTitle = () => {
  return (
    <div className="container">
      <span className="container__netflix">Netflix</span>
      <span className="container__text">Prywatność</span>
      <Link to="/login" className="container__text">
        Zaloguj się
      </Link>
      <span className="container__tools">...</span>
    </div>
  );
};

export default WelcomeTitle;
