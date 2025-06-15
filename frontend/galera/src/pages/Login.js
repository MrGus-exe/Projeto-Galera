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
      console.log(res.data); // aqui você pode salvar o token no localStorage
    } catch (err) {
      alert("Erro ao fazer login. Verifique as credenciais.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
