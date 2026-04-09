import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/siteData";

export default function Header({ activeId, menuOpen, onToggleMenu, onCloseMenu }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={onCloseMenu}>
          Asta
        </Link>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {navItems.map((item) => {
              const isActive = isHome && activeId === item.id;
              return (
                <li className="nav__item" key={item.id}>
                  <Link
                    to={item.href}
                    className={`nav__link ${isActive ? "active-link" : ""}`}
                    onClick={onCloseMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__actions">
          <button className="nav__toggle" id="nav-toggle" type="button" onClick={onToggleMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
    </header>
  );
}
