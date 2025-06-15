const express = require('express');
const router = express.Router();
const db = require('../db'); // ajuste o caminho se necessário
const { registerUser } = require('../controllers/userController');

// Rota de cadastro
router.post('/register', registerUser);

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const user = rows[0];

    if (user.password !== password) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    // Login bem-sucedido
    res.json({ message: "Login bem-sucedido", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

module.exports = router;
