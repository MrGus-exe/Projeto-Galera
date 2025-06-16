const express = require("express");
const cors = require("cors");
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
