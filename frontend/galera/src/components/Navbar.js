import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Início</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/cadastro" style={styles.link}>Cadastro</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px",
    backgroundColor: "#333",
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
};

export default Navbar;
