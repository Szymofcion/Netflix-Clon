import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import netflixTitle from "../component/img/netflixTitle.png";
import "./Login.scss";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ login: "", password: "" });
  const loggin = () => {
    console.log("click");
  };

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
        <img
          src={netflixTitle}
          className="login__container-netflix"
          alt="logo netflix"
        ></img>
        <form className="login__container-input">
          <input
            className="login__container-input--style"
            placeholder="Login"
            type="text"
          />
          <input
            className="login__container-input--style"
            placeholder="Hasło"
            type="text"
          />
          <button onClick={loggin} className="login__container-button--style">
            Zaloguj się
          </button>
          {/* <Link onClick={loggin} to="/selectProfil">
          </Link> */}

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
        </form>
      </main>
    </section>
  );
};

export default Login;
