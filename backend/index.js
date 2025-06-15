require("dotenv").config(); // <--- ISSO É ESSENCIAL
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const userRoutes = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Conexão com MySQL usando variáveis do .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
