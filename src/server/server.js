const express = require("express");
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xyz',
  database: 'cs157a'

});

connection.connect(function(err){
  (err)? console.log(err): console.log(connection);

});

app.get("/api/schools", (req, res) => {

  connection.query('SELECT * FROM schools', function(err, data){
    (err)?res.send(err):res.json(data);
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
