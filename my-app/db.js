const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'Users_Emails'
});

connection.connect((error) => {
  if (error) {
    console.log(`Error connecting to database: ${error}`);
    return;
  }
  console.log('Connected to MySQL database');

  const createTableQuery = `CREATE TABLE IF NOT EXISTS emails (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL
  )`;

  connection.query(createTableQuery, (error, result) => {
    if (error) {
      console.log(`Error creating table: ${error}`);
      return;
    }
    console.log('Table created successfully');
  });
});

const app = express();

// Middleware for handling form data
app.use(express.urlencoded({ extended: true}));

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
  const email = req.body.email;

  const insertQuery = `INSERT INTO emails (email) VALUES ('${email}')`;

  connection.query(insertQuery, (error, result) => {
    if (error) {
      console.log(`Error inserting data into table: ${error}`);
      return res.status(500).json({ message: 'Internal server error' });
    }
    console.log('Data inserted successfully');
    return res.status(200).json({ message: 'Data inserted successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
