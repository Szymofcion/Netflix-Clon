import { Link } from "react-router-dom";
import "./WelcomeButton.scss";
const WelcomeButtom = () => {
  return (
    <div className="container__main-div">
      <Link to="/registraion">
        <button className="container__main-button">Zarejestruj się</button>
      </Link>
    </div>
  );
};

export default WelcomeButtom;
