const express = require("express");
const schools = express.Router();
const cors = require("cors");
const pool = require("../db/database");
schools.use(cors());

schools.get("/search", (req, res) => {
  console.log(req.query);
  pool.query(
    `SELECT * FROM schools WHERE schools.SchoolName IN (SELECT School_name FROM located_in JOIN
      (SELECT id, state_name FROM city WHERE state_name LIKE "%${req.query.term}%") AS a
      ON
      a.id = located_in.City_id)
      OR schools.SchoolName LIKE "%${req.query.term}%"
      OR schools.conf LIKE "%${req.query.term}%"`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});

schools.get("/oneSchool", (req, res) => {
  console.log(req.query);
  pool.query(
    `SELECT * FROM schools JOIN
    plays_in ON schools.SchoolName = plays_in.SchoolName JOIN
    homestadium ON plays_in.id = homestadium.ID JOIN
    located_in ON schools.SchoolName = located_in.School_name JOIN
    city ON located_in.City_id = city.id JOIN
    coaches ON schools.SchoolName = coaches.School_name JOIN
    head_coach ON coaches.Coach_id = head_coach.ID JOIN
    record ON record.school = schools.SchoolName AND record.year = 2019 JOIN
    (SELECT COUNT(college) AS NBAplayers FROM nbaplayers WHERE nbaplayers.college = "${req.query.school}") AS NBAcount
    WHERE schools.SchoolName = "${req.query.school}" AND schools.conf = "${req.query.conference}"`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});

schools.get("/record", (req, res) => {
  console.log(req.query);
  pool.query(
    `SELECT * FROM record WHERE school = "${req.query.school}" AND conference = "${req.query.conference}"`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

schools.get("/champGames", (req, res) => {
  pool.query(
    `SELECT * FROM won WHERE schoolName = "${req.query.school}" OR opponent = "${req.query.school}"`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

schools.get("/champCount", (req, res) => {
  pool.query(
    `SELECT COUNT(schoolName) as TitlesWon FROM won WHERE schoolName = "${req.query.school}"`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

schools.get("/allnba", (req, res) => {
  pool.query(
    `SELECT * FROM nbaplayers WHERE college = "${req.query.school}"`,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});

module.exports = schools;
