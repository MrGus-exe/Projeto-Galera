const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@GustaOlvr34", 
  database: "rede_social"
});

// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Tentando login com:", email, password);
    const [rows] = await db.promise().execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const user = rows[0];

    if (user.password !== password) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    res.json({ message: "Login bem-sucedido", user });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ error: "Erro ao fazer login." });
  }
};

// CADASTRO
const registerUser = async (req, res) => {
  const { username, email, password, birthdate, profile_pic } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Campos obrigatórios faltando." });
  }

  try {
    await db.promise().execute(
      `INSERT INTO users (username, email, password, birthdate, profile_pic)
       VALUES (?, ?, ?, ?, ?)`,
      [username, email, password, birthdate, profile_pic]
    );
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    res.status(500).json({ message: "Erro interno." });
  }
};

module.exports = { loginUser, registerUser };
