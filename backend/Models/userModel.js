const db = require('../db');

const createUser = (user, callback) => {
  const sql = 'INSERT INTO users (username, email, password, birthdate, profile_pic) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [user.username, user.email, user.password, user.birthdate, user.profile_pic], callback);
};

module.exports = { createUser };
