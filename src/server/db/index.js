const express = require("express");
const mysql = require("mysql");
const config = require("../config");

const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
  console.log("db connected from INDEX INDEX");
  if (err) console.log(err);
});

module.exports = Connection;
