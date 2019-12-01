const express = require("express");
const nbaplayers = express.Router();
const cors = require("cors");
const pool = require("../db/database");
nbaplayers.use(cors());
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
    pool.query(
        `SELECT id FROM nbaplayers WHERE name = "${req.body.name}" AND team = "${req.body.team}"`,
        (err, result) => {
            if (err) throw err;
            console.log(result);
            console.log(result[0].id);
            playerId = result[0].id;
            console.log(playerId);
            pool.query(
                `DELETE FROM nbaplayers WHERE id = ${playerId}`,
                (err, result) => {
                    if (err) throw err;
                    console.log(result.affectedRows);
                    pool.query(
                        `DELETE FROM playedfor WHERE pid = ${playerId}`,
                        (err, result) => {
                            if (err) throw err;
                            res.send(result);
                        }
                    );
                }
            );
        }
    );
});
module.exports = nbaplayers;