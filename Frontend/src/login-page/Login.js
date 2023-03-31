import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

import axios from "../component/api/axios";
import InputLogin from "./InputLogi";
import InputPassword from "./InputPassword";
import ButtonLogin from "./ButtonLogin";

import netflixTitle from "../component/img/netflixTitle.png";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ login: "", password: "" });

  // const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    console.log(formData.login, formData.password);
  };

  const onChangeLogin = (e) => {
    setFormData({ ...formData, login: e.target.value });
  };
  const onChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getUsers = async () => {
  //     try {
  //       const response = await axios.post("/api/auth/login", {
  //         signal: controller.signal,
  //       });

  //       console.log(response.data);
  //       isMounted && setNick(response.users);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getUsers();
  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);

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
            <InputLogin value={formData.login} onChange={onChangeLogin} />
            <InputPassword
              value={formData.password}
              onChange={onChangePassword}
            />
            {
              // <Link to="/selectProfil">
              <ButtonLogin onClick={login} />
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
