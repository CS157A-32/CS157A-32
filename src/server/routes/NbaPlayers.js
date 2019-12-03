const express = require("express");
const nbaplayers = express.Router();
const cors = require("cors");
const pool = require("../db/database");
nbaplayers.use(cors());

//Get all NBA players
nbaplayers.get("/allPlayers", (req, res) => {
  pool.query("SELECT * FROM nbaplayers", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//Get NBA players by NBA team
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

//Adding NBA player
nbaplayers.post("/addPlayer", (req, res) => {
  let newPlayerId;
  pool.query(
    //Insert into nbaplayers table
    `INSERT INTO nbaplayers (name, college, position, nbasince, team, salary)
        VALUES ("${req.body.name}", "${req.body.college}", "${req.body.position}", ${req.body.yeardrafted}, "${req.body.team}", ${req.body.salary})`,
    (err, result) => {
      if (err) throw err;
      newPlayerId = result.insertId; //use the new insertID as pid for next insert
      pool.query(
        //Insert relationship info int playedfor table
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

//Delete player (by ID, or by name and team)
nbaplayers.post("/deletePlayer", (req, res) => {
  pool.query(
    `DELETE FROM nbaplayers WHERE id = ${req.body.playerId}`,
    (err, result) => {
      if (err) throw err;
      pool.query(
        `DELETE FROM playedfor WHERE pid = ${req.body.playerId}`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    }
  );
});

//Edit a player's team and salary using ID reference
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
