import "./MobileNav.scss";
import netflixTitle from "../img/netflixTitle.png";
import Avatar1 from "../img/avatar1.png";

const MobileNav = () => {
  return (
    <div className="nav__container">
      <img src={netflixTitle} className="nav__container-netflix" alt="netflix"></img>
      <img className="nav__container-avatar" src={Avatar1} alt="avatar"></img>
    </div>
  );
};

export default MobileNav;
