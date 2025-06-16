import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim() !== "") {
      alert(`Resposta enviada: "${replyText}"`);
      setReplyText("");
      setShowReply(false);
    }
  };

  return (
    <div style={styles.card}>
      <strong>@{post.user}</strong>
      <p>{post.content}</p>
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
          <button onClick={handleReply} style={styles.sendButton}>Enviar</button>
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
};

export default PostCard;
