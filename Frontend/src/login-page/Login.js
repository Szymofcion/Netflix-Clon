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
  const [users, setUsers] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  // const navigate = useNavigate();


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.post("/api/auth/login", {
          signal: controller.signal,
        });

        console.log(response.data);
        isMounted && setUsers(response.users);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

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
        <form  className="login__container-input">
          <div className="login__container-input--style">
            <InputLogin value={login} onChange={(e)=> setLogin(e.target.value)} />
            <InputPassword value={password} onChange={(e)=> setPassword(e.target.value)} />
            {
              // <Link to="/selectProfil">
              <ButtonLogin type="submit" />
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
