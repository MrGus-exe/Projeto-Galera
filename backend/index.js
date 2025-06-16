const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importação de rotas
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const postRoutes = require("./routes/postRoutes");

// Uso das rotas
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/posts", postRoutes);

// Inicialização do servidor
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});