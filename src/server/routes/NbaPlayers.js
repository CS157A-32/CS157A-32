const express = require("express");
const nbaplayers = express.Router();
const cors = require("cors");
const pool = require("../db/database");
nbaplayers.use(cors());

nbaplayers.get("/allPlayers", (req, res) => {
  pool.query("SELECT * FROM nbaplayers", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

nbaplayers.get("/byTeam", (req, res) => {
  console.log(req.body);
  pool.query(
    `SELECT * FROM nbaplayers WHERE team = "${req.query.team}"`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

nbaplayers.post("/addPlayer", (req, res) => {
  console.log(req.body);
  let newPlayerId;
  pool.query(
    `INSERT INTO nbaplayers (name, college, position, nbasince, team, salary)
        VALUES ("${req.body.name}", "${req.body.college}", "${req.body.position}", ${req.body.yeardrafted}, "${req.body.team}", ${req.body.salary})`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      newPlayerId = result.insertId;
      console.log(result.insertId);
      pool.query(
        `INSERT INTO playedfor (pid, schoolname, conference)
          VALUES (${newPlayerId}, "${req.body.college}", "${req.body.conference}")`,
        (err, result) => {
          if (err) throw err;
          res.send("nba player created");
        }
      );
    }
  );
});

nbaplayers.post("/deletePlayer", (req, res) => {
  console.log(req.body);
  let playerId;
  // pool.query(
  //   `SELECT id FROM nbaplayers WHERE name = "${req.body.name}" AND team = "${req.body.team}"`,
  //   (err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //     console.log(result[0].id);
  //     playerId = result[0].id;
  //     console.log(playerId);
  pool.query(
    `DELETE FROM nbaplayers WHERE id = ${req.body.playerId}`,
    (err, result) => {
      if (err) throw err;
      console.log(result.affectedRows);
      pool.query(
        `DELETE FROM playedfor WHERE pid = ${req.body.playerId}`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    }
  );
  // }
  // );
});

nbaplayers.post("/editPlayer", (req, res) => {
  console.log(req.body);
  pool.query(
    `UPDATE nbaplayers SET team = "${req.body.team}", salary = ${req.body.salary}
        WHERE id = ${req.body.id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

module.exports = nbaplayers;
