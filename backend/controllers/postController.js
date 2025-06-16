const db = require("../db");

// Criar nova postagem
const createPost = async (req, res) => {
  const { user_id, content } = req.body;

  if (!user_id || !content) {
    return res.status(400).json({ error: "Campos obrigatÃ³rios ausentes." });
  }

  try {
    const [result] = await db.promise().execute(
      "INSERT INTO posts (user_id, content, created_at) VALUES (?, ?, NOW())",
      [user_id, content]
    );
    res.status(201).json({ message: "Postagem criada com sucesso!", id: result.insertId });
  } catch (error) {
    console.error("Erro ao criar postagem:", error);
    res.status(500).json({ error: "Erro ao criar postagem." });
  }
};

// Buscar todas as postagens
const getAllPosts = async (req, res) => {
  try {
    const [rows] = await db.promise().execute(`
      SELECT p.id, p.content, p.created_at, u.username
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar postagens:", error);
    res.status(500).json({ error: "Erro ao buscar postagens." });
  }
};

module.exports = { createPost, getAllPosts };