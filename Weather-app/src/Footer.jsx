

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#003366",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Weather Forecast App. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
