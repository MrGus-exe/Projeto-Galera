const { createUser } = require('../models/userModel');

const registerUser = (req, res) => {
  const user = req.body;

  if (!user.username || !user.email || !user.password) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes" });
  }

  createUser(user, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Usuário criado com sucesso", userId: result.insertId });
  });
};

module.exports = { registerUser };
