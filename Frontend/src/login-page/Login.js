import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

import axios from "../component/api/axios";
import InputLogin from "./InputLogi";
import InputPassword from "./InputPassword";
import ButtonLogin from "./ButtonLogin";

import netflixTitle from "../component/img/netflixTitle.png";
import "./Login.scss";

const Login = ({ onLogin }) => {
  // const [formData, setFormData] = useState({ login: "", password: "" });
  const [token, setToken] = useState();

  // const login = (e) => {
  //   e.preventDefault();
  //   if (formData.login === "Daria" && formData.password === "123")
  //     onLogin({ name: formData.login });
  //   console.log(formData.login, formData.password);
  // };

  // const onChangeLogin = (e) => {
  //   setFormData({ ...formData, login: e.target.value });
  // };
  // const onChangePassword = (e) => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  useEffect(() => {
    const controller = new AbortController();

    const getJWT = async () => {
      try {
        const response = await axios.post("/api/auth/login", {
          signal: controller.signal,
        });

        console.log(response.data);
        setToken(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getJWT();
    return () => {
      controller.abort();
    };
  }, []);

  axios.post("/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
    
  });

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
