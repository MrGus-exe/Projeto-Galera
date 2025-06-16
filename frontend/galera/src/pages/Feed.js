import React, { useState } from "react";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "joaozinho",
      content: "Olá galera! Essa é minha primeira postagem!",
    },
    {
      id: 2,
      user: "maria_dev",
      content: "Alguém aí já usou React com Tailwind?",
    },
  ]);

  return (
    <div style={{ padding: "30px", marginLeft: "250px", color: "#fff" }}>
      <h2 style={{ marginBottom: "20px" }}>Início</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
