import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/images/weather-logo.png"
          alt="Weather Logo"
          className="logo"
        />
        <h1 className="title">Weather Forecast</h1>
      </div>

      <nav className="nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
