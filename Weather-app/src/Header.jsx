

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#003366",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/weather-logo.png"
          alt="Weather Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0 }}>Weather Forecast</h1>
      </div>

      <nav>
        <a
          href="#"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="#"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          About
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
