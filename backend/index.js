const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send("API funcionando!");
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
