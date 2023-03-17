import "./MobileNav.scss";
import Avatar1 from "../img/avatar1.png";

const MobileNav = () => {
  return (
    <div className="nav__container">
      <span className="nav__container-netflix">Netflix</span>
      <img className="nav__container-avatar" src={Avatar1} alt="avatar"></img>
    </div>
  );
};

export default MobileNav;
