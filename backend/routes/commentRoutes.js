// backend/routes/commentRoutes.js

const express = require("express");
const router = express.Router();

// Importa as funções do controller
const { addComment, getCommentsByPostId } = require("../controllers/commentController");

// Rota: Criar novo comentário
router.post("/", addComment);

// Rota: Buscar comentários de um post específico (com nome do usuário)
router.get("/post/:id", getCommentsByPostId);

module.exports = router;