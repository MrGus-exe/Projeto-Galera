// backend/controllers/commentController.js

const db = require("../db");

// Criar novo comentário
const addComment = async (req, res) => {
  const { post_id, user_id, comment } = req.body;

  if (!post_id || !user_id || !comment) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." });
  }

  try {
    const [result] = await db.promise().execute(
      "INSERT INTO comments (post_id, user_id, comment, created_at) VALUES (?, ?, ?, NOW())",
      [post_id, user_id, comment]
    );
    res.status(201).json({ message: "Comentário criado com sucesso!", id: result.insertId });
  } catch (error) {
    console.error("Erro ao criar comentário:", error);
    res.status(500).json({ error: "Erro interno ao criar comentário." });
  }
};

// Buscar comentários de um post específico (com nome do usuário)
const getCommentsByPostId = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.promise().execute(
      `SELECT c.comment, c.created_at, u.username 
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.post_id = ?
       ORDER BY c.created_at ASC`,
      [id]
    );
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
    res.status(500).json({ error: "Erro interno ao buscar comentários." });
  }
};

module.exports = {
  addComment,
  getCommentsByPostId
};
