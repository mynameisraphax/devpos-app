const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'devpos_user',
  password: 'senha123',
  database: 'devpos_db',
});
module.exports = pool;