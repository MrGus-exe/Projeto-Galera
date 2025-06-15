import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register"; // ajuste o caminho se estiver diferente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<div>Bem-vindo à Galera!</div>} />
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}


export default App;






