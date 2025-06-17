-- Usuários
INSERT INTO users (username, email, password, birthdate, profile_pic) VALUES
('alice', 'alice@example.com', '1234', '2000-01-01', ''),
('bob', 'bob@example.com', '1234', '1998-03-22', ''),
('carol', 'carol@example.com', '1234', '2001-07-15', ''),
('dave', 'dave@example.com', '1234', '1997-12-30', ''),
('eve', 'eve@example.com', '1234', '1999-11-20', ''),
('frank', 'frank@example.com', '1234', '1996-04-10', ''),
('grace', 'grace@example.com', '1234', '2002-06-25', ''),
('heidi', 'heidi@example.com', '1234', '2000-09-14', ''),
('ivan', 'ivan@example.com', '1234', '1995-08-08', ''),
('judy', 'judy@example.com', '1234', '2003-02-05', '');

-- Posts
INSERT INTO posts (user_id, content, image_url) VALUES
(1, 'Meu primeiro post!', ''),
(2, 'Bom dia, galera!', ''),
(3, 'Alguém recomenda séries?', ''),
(4, 'Postando só pra testar', ''),
(5, 'Curtam minha nova foto', ''),
(6, 'Feliz aniversário pra mim!', ''),
(7, 'É hoje!!!', ''),
(8, 'Novidades em breve...', ''),
(9, 'Amo essa rede social', ''),
(10, 'Fazendo um post aleatório', '');

-- Comentários
INSERT INTO comments (post_id, user_id, comment) VALUES
(1, 2, 'Legal!'),
(2, 3, 'Bom dia!'),
(3, 1, 'Assiste Dark!'),
(4, 5, 'Testado com sucesso'),
(5, 6, 'Linda foto!'),
(6, 7, 'Parabéns!'),
(7, 8, 'Boa sorte!'),
(8, 9, 'Tô curioso...'),
(9, 10, 'Também amo!'),
(10, 1, 'Post aleatório aprovado!');

-- Likes
INSERT INTO likes (post_id, user_id) VALUES
(1, 3),
(2, 4),
(3, 5),
(4, 6),
(5, 7),
(6, 8),
(7, 9),
(8, 10),
(9, 1),
(10, 2);

-- Seguidores
INSERT INTO followers (follower_id, followed_id) VALUES
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 1);
