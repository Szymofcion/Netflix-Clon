import MobileNav from "./MobileNav";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav__container">
      <MobileNav />
      <div className="nav__container-desktop">
        <div className="nav_container-list">
          <span>Netlix</span>
          <a href="">Strona główna</a>
          <a href="">Filmy</a>
          <a href="">Moja lista</a>
        </div>
        <div className="nav_container-options">
          <span>lupa profil</span>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
