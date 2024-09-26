import "./Header.css";

function HeaderNavLinks() {
  return (
    <section className="header-section">
      <div className="header-title">
        <h2 className="header-logo">Muranga university tech club</h2>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-items">
            <a href="#" className="list-item">
              Home
            </a>
          </li>
          <li className="nav-list-items">
            <a href="#about" className="list-item">
              about
            </a>
          </li>
          <li className="nav-list-items">
            <a href="#leadership" className="list-item">
              leadership
            </a>
          </li>
          <li className="nav-list-items">
            <a href="#tracks" className="list-item">
              tracks
            </a>
          </li>
          <li className="nav-list-items">
            <a href="#events" className="list-item">
              events
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
function Header() {
  return (
    <div>
      <HeaderNavLinks />
    </div>
  );
}

export default Header;
