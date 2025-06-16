// src/pages/Login.js
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", credentials);
      alert("Login bem-sucedido!");

      // Salva o token no localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redireciona (ex: para o feed ou home)
      window.location.href = "/"; // ou qualquer rota da aplicação

    } catch (err) {
      alert("Erro ao fazer login. Verifique as credenciais.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>LOGIN</h2>
        <input
          type="email"
          name="email"
          placeholder="Digite seu usuário..."
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha..."
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#1e1e1e",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "700px",
    paddingTop: "135px",
  },
  form: {
    backgroundColor: "#2c2f33",
    padding: "40px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "300px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  input: {
    padding: "12px",
    borderRadius: "25px",
    border: "2px solid transparent",
    outline: "none",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
    transition: "border 0.3s",
  },
  button: {
    padding: "10px",
    borderRadius: "25px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "opacity 0.2s",
  },
};

export default Login;
