
import './Nav.scss'


const Nav = () => {
  return (
    <div className="nav__container">
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
  );
};
export default Nav;
