import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaThLarge, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={styles.wrapper}>
      {/* Sidebar lateral */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>GALERA</h2>
        <div style={styles.email}>                  </div>

        <div style={styles.searchBox}>
          <FaSearch style={{ marginRight: "8px", color: "#aaa" }} />
          <input type="text" placeholder="Search" style={styles.searchInput} />
        </div>

        <nav style={styles.menu}>
          <Link to="/notificacoes" style={styles.menuItem}>
            <FaBell style={styles.icon} />
            Notificações
          </Link>
          <Link to="/inscricoes" style={styles.menuItem}>
            <FaThLarge style={styles.icon} />
            Minhas inscrições
          </Link>
        </nav>
      </aside>

      {/* Navbar superior com os links principais */}
      <nav style={styles.nav}>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Início</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/cadastro" style={styles.link}>Cadastro</Link>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  email: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#555",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: "5px",
    padding: "5px 10px",
    marginBottom: "25px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    flex: 1,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.2s",
  },
  icon: {
    marginRight: "10px",
  },
  nav: {
  marginLeft: "250px",
  width: "100%",
  backgroundColor: "#000", // ← fundo preto
  padding: "12px 500px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "flex-start", // ou 'center' ou 'flex-end'
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 5,
},

  navLinks: {
    display: "flex",
    gap: "25px",
    
  },
  link: {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "5px",
  backgroundColor: "transparent",
  border: "1px solid #fff",
  transition: "background 0.2s",
}
};



export default Navbar;
