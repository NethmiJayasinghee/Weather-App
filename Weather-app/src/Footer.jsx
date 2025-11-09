import React from "react";
import "./Footer.css"; // import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Weather Forecast App. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
