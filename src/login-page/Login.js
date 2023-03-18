import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import netflixTitle from "../component/img/netflixTitle.png";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login">
      <nav className="login-nav">
        <Link to="/">
          <button className="back-arrow">
            <BsArrowLeftShort />
          </button>
        </Link>
      </nav>
      <main className="login__container">
        <img src={netflixTitle} className="login__container-netflix" alt="logo netflix"></img>
        <div className="login__container-input">
          <input
            className="login__container-input--style"
            placeholder="E-mail"
            type="text"
          />
          <input
            className="login__container-input--style"
            placeholder="Hasło"
            type="text"
          />
          <Link to="/selectProfil">
            <button className="login__container-button--style">
              Zaloguj się
            </button>
          </Link>

          <p className="login__container-help">Potrzebujesz pomocy?</p>
          <Link to="/">
            <p className="login__container-signUp">
              Nie masz jeszcze konta w serwisie Netflix? Zarejestruj się teraz.
            </p>
          </Link>
          <button className="login__container-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            eligendi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem, ipsum.
          </button>
        </div>
      </main>
    </section>
  );
};

export default Login;
