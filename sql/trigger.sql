DELIMITER //
CREATE TRIGGER after_post_insert
AFTER INSERT ON posts
FOR EACH ROW
BEGIN
  INSERT INTO comments (post_id, user_id, comment)
  VALUES (NEW.id, NEW.user_id, 'Obrigado por compartilhar!');
END;
//
DELIMITER ;
