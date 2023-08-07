import "./MobileNav.scss";
import netflixTitle from "../img/netflixTitle.png";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const MobileNav = ({ user, logout }) => {
  const selectedImage = useSelector((state) => state.addAvatar.selectedImage);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div className={scrolled ? "nav__container shadow-nav" : "nav__container"}>
      <img
        src={netflixTitle}
        className="nav__container-netflix"
        alt="netflix"
      ></img>

      {selectedImage && (
        <img
          className="nav__container-avatar"
          onClick={logout}
          src={selectedImage.img}
          alt="avatar"
        ></img>
      )}
    </div>
  );
};

export default MobileNav;
