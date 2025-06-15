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
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Nome de usuário" onChange={handleChange} required />
        <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Senha" onChange={handleChange} required />
        <input name="birthdate" type="date" onChange={handleChange} />
        <input name="profile_pic" placeholder="URL da foto de perfil" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
