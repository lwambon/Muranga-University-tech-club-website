import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-section">
      <div className="header-title">
        <h2 className="header-logo">Muranga University Tech Club</h2>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="list-item">
              home
            </Link>
          </li>

          <li className="nav-list-item">
            <Link to="/leadership" className="list-item">
              leadership
            </Link>
          </li>

          <li className="nav-list-item">
            <Link to="/tracks" className="list-item">
              tracks
            </Link>
          </li>

          <li className="nav-list-item">
            <Link to="/events" className="list-item">
              events
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
