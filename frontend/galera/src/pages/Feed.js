import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Erro ao buscar postagens:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !newPostContent.trim()) {
      alert("Você precisa estar logado e digitar um conteúdo!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/posts", {
        user_id: user.id,
        content: newPostContent,
      });

      setNewPostContent("");
      fetchPosts(); // Atualiza feed após nova postagem
    } catch (err) {
      console.error("Erro ao criar postagem:", err);
    }
  };

  return (
    <div style={{ padding: "30px", marginLeft: "250px", color: "#fff" }}>
      <h2 style={{ marginBottom: "20px" }}>Início</h2>

      {/* Campo para nova postagem */}
      <form onSubmit={handlePostSubmit} style={{ marginBottom: "30px" }}>
        <textarea
          placeholder="No que você está pensando?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          style={{
            width: "100%",
            height: "80px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#2c2f33",
            color: "#fff",
            border: "1px solid #555",
            resize: "none",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Publicar
        </button>
      </form>

      {/* Lista de postagens */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;