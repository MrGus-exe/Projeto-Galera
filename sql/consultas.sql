-- 1. Ver todos os posts de um usuário
SELECT * FROM posts WHERE user_id = 1;

-- 2. Total de curtidas de um post
SELECT COUNT(*) AS total_likes FROM likes WHERE post_id = 1;

-- 3. Comentários de um post com nome do usuário
SELECT u.username, c.comment
FROM comments c
JOIN users u ON u.id = c.user_id
WHERE c.post_id = 1;

-- 4. Lista de seguidores
SELECT u1.username AS seguidor, u2.username AS seguido
FROM followers f
JOIN users u1 ON f.follower_id = u1.id
JOIN users u2 ON f.followed_id = u2.id;

-- 5. Posts com mais de 2 curtidas
SELECT p.id, p.content, COUNT(l.id) AS likes
FROM posts p
JOIN likes l ON p.id = l.post_id
GROUP BY p.id
HAVING likes > 2;
