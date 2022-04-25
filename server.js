const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'OhHiThere!Fluffu2',
    database: 'hr_db'
  },
  console.log(`Connected to the hr_db database.`)
);

module.exports = db;