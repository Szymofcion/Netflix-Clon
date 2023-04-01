import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

import refreshSession from "../utils/refreshSession";
import InputLogin from "./InputLogi";
import InputPassword from "./InputPassword";
import ButtonLogin from "./ButtonLogin";
import netflixTitle from "../component/img/netflixTitle.png";

import "./Login.scss";

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      method: "GET",
    });

    if (!response.ok) {
      if (response.status === 403) {
        const sessionUpdated = await refreshSession();

        if (sessionUpdated) {
          return getUsers();
        }
      }

      return false;
    }

    const users = await response.json();
    console.log({ users });
  } catch (error) {
    console.log(error);
  }
};

const Login = ({ onLogin }) => {
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData.get("login"));

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          login: formData.get("login"),
          password: formData.get("password"),
        }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      if (data.refreshToken) {
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      if (data.accessToken) {
        sessionStorage.setItem("accessToken", data.accessToken);
      }

      return true;
    } catch (err) {
      console.error(err);
    }

    return false;
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
        <button onClick={getUsers}>Get users</button>
        <form className="login__container-input" onSubmit={handleLogin}>
          <div className="login__container-input--style">
            <InputLogin />
            <InputPassword />
            {
              // <Link to="/selectProfil">
              <ButtonLogin />
              // </Link>
            }
          </div>

          <p className="login__container-help">Potrzebujesz pomocy?</p>
          <Link to="/">
            <p className="login__container-signUp">
              Nie masz jeszcze konta w serwisie Netflix? Zarejestruj się teraz.
            </p>
          </Link>
          <p className="login__container-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            eligendi. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem, ipsum.
          </p>
        </form>
      </main>
    </section>
  );
};

export default Login;
