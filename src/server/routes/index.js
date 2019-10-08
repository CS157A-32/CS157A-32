const express = require("express");
const mysql = require("mysql");
const config = require("../config");
const Con = require("../db");

const router = express.Router();

router.get("/api/schools", getSchools);

module.exports = router;

function getSchools(req, res) {
  Con.query("SELECT * FROM schools", function(err, data) {
    err ? res.send(err) : res.json(data);
  });
}
