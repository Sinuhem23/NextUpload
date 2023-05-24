const express = require('express');
const mysql2 = require('mysql2');

// Create connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'AM67373i!',
  database: 'nodemysql',
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql2 Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

// Create table
app.get('/createuserstable', (req, res) => {
  let sql =
    'CREATE TABLE users(id int AUTO_INCREMENT, firstName VARCHAR(30), lastName VARCHAR(30), username VARCHAR(30), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User Table Created...');
  });
});

// Insert User 1
app.get('/adduser1', (req, res) => {
  let user = {
    firstName: 'Sinuhe',
    lastName: 'Montero',
    username: 'worldofamustang',
  };
  let sql = 'INSERT INTO users SET ?';
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User 1 Added...');
  });
});

// Insert User 2
app.get('/adduser2', (req, res) => {
  let user = {
    firstName: 'Test',
    lastName: 'Montero',
    username: 'test',
  };
  let sql = 'INSERT INTO users SET ?';
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User 2 Added...');
  });
});

// Select Users
app.get('/getusers', (req, res) => {
  let sql = 'SELECT * FROM users';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('Users Fetched...');
  });
});

// Select User
app.get('/getuser/:id', (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User Fetched...');
  });
});

// Update User
app.get('/updateuser/:id', (req, res) => {
  let newUserFirstName = 'Updated User First Name';
  let sql = `UPDATE users SET firstName = '${newUserFirstName}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User Updated...');
  });
});

// Delete User
app.get('/deleteuser/:id', (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('User Deleted...');
  });
});

app.listen('3002', () => {
  console.log('Server started on port 3002');
});
