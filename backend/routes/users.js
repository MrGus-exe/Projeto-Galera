const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Conexão local (pode ser extraída para um arquivo separado depois)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@GustaOlvr34", 
  database: "rede_social"
});

router.post("/register", (req, res) => {
  const { username, email, password, birthdate, profile_pic } = req.body;

  console.log("Dados recebidos:", req.body);

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Campos obrigatórios faltando." });
  }

  const query = `
    INSERT INTO users (username, email, password, birthdate, profile_pic)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [username, email, password, birthdate, profile_pic], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar:", err);
      return res.status(500).json({ message: "Erro interno." });
    }
    return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  });
});

module.exports = router;
