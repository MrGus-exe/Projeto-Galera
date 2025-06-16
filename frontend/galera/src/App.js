import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed"; // ⬅️ ADICIONE ESTA LINHA
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} /> {/* ⬅️ SUBSTITUI O "Bem-vindo à Galera!" */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
