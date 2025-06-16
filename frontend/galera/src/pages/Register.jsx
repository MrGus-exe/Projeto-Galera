import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: "",
    profile_pic: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      alert("Usuário cadastrado com sucesso!");
      console.log(res.data);
    } catch (err) {
      alert("Erro ao cadastrar usuário.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>CADASTRO</h2>
        <input name="username" placeholder="Nome de usuário" onChange={handleChange} required style={styles.input} />
        <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required style={styles.input} />
        <input name="password" type="password" placeholder="Senha" onChange={handleChange} required style={styles.input} />
        <input name="birthdate" type="date" onChange={handleChange} style={styles.input} />
        <input name="profile_pic" placeholder="URL da foto de perfil" onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#1e1e1e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#2c2f33",
    padding: "40px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "320px",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  input: {
    padding: "12px",
    borderRadius: "25px",
    border: "1px solid #ccc",
    outline: "none",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
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
  },
};

export default Register;