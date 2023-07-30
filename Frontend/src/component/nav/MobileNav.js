import "./MobileNav.scss";
import netflixTitle from "../img/netflixTitle.png";
import Avatar1 from "../img/avatar1.png";
import { useState, useEffect } from "react";

const MobileNav = ({ user, logout }) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  return (
    <div className={scrolled ? "nav__container shadow-nav" : "nav__container"}>
      <img
        src={netflixTitle}
        className="nav__container-netflix"
        alt="netflix"
      ></img>

      <img className="nav__container-avatar" onClick={logout} src={Avatar1} alt="avatar"></img>
      
    </div>
  );
};

export default MobileNav;
