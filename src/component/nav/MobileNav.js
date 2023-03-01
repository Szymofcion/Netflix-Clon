import { BsJustify } from "react-icons/bs";
import './MobileNav.scss'


const MobileNav = () => {
  return (
    <div className="nav__container">
      <div className="nav__container-burger">
      <BsJustify />
      </div>
      <span>Netflix</span>
      <input className="nav__container-input" placeholder="Szukaj"></input>
    </div>
  );
};

export default MobileNav;
