import React, { useEffect, useState } from "react";
import axios from "axios";

const PostCard = ({ post }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [comments, setComments] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // Buscar comentários do post ao carregar
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comments/post/${post.id}`);
        setComments(res.data);
      } catch (err) {
        console.error("Erro ao carregar comentários:", err);
      }
    };

    fetchComments();
  }, [post.id]);

  const handleReply = async () => {
    if (replyText.trim() === "") return;

    try {
      await axios.post("http://localhost:5000/api/comments", {
        post_id: post.id,
        user_id: user.id,
        comment: replyText,
      });

      // Atualiza comentários após envio
      const res = await axios.get(`http://localhost:5000/api/comments/post/${post.id}`);
      setComments(res.data);
      setReplyText("");
      setShowReply(false);
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
    }
  };

  return (
    <div style={styles.card}>
      <strong>@{post.user}</strong>
      <p>{post.content}</p>
      {post.created_at && (
        <p style={{ fontSize: "12px", color: "#aaa" }}>
          Publicado em: {new Date(post.created_at).toLocaleString("pt-BR")}
        </p>
      )}
      <button style={styles.replyButton} onClick={() => setShowReply(!showReply)}>
        Responder
      </button>

      {showReply && (
        <div style={styles.replyBox}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Digite sua resposta..."
            style={styles.textarea}
          />
          <button onClick={handleReply} style={styles.sendButton}>
            Enviar
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4 style={{ color: "#aaa" }}>Comentários:</h4>
          {comments.map((comment, index) => (
            <div key={index} style={styles.comment}>
              <strong>@{comment.username}</strong>: {comment.comment}
              <div style={{ fontSize: "11px", color: "#aaa", marginTop: "2px" }}>
                {new Date(comment.created_at).toLocaleString("pt-BR")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#2c2f33",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  replyButton: {
    marginTop: "10px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  replyBox: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textarea: {
    resize: "none",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    height: "80px",
  },
  sendButton: {
    alignSelf: "flex-end",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#555",
    color: "#fff",
    cursor: "pointer",
  },
  comment: {
    marginTop: "5px",
    color: "#ddd",
    padding: "5px 0",
    borderBottom: "1px solid #444",
  },
};

export default PostCard;