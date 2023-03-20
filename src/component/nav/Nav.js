import MobileNav from "./MobileNav";

import "./Nav.scss";

const Nav = ({user, logout}) => {
  return (
    <nav className="nav__container">
      <MobileNav user={user} logout={logout} />
      <div className="nav__container-desktop">
        <div className="nav_container-list">
          <span>Netlix</span>
          <a href="a">Strona główna</a>
          <a href="a">Filmy</a>
          <a href="a">Moja lista</a>
        </div>
        <div className="nav_container-options">
          <span>lupa profil</span>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
