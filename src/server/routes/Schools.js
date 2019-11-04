const express = require("express");
const schools = express.Router();
const cors = require("cors");
const Sequelize = require("sequelize");

const School = require("../models/School");

const Op = Sequelize.Op;
schools.use(cors());

schools.get("/getSchool", (req, res) => {
  console.log(req.body);
  School.findOne({
    where: {
      name: req.query.schoolName,
      conference: req.query.conference
    }
  })
    .then(school => {
      if (school) {
        res.json(school);
      } else {
        res.send("Can not find school with this name");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

schools.get("/byName", (req, res) => {
  School.findAll({
    where: {
      name: {
        [Op.substring]: req.query.schoolName
      }
    }
  })
    .then(school => {
      if (school) {
        res.json(school);
      } else {
        res.send("Can not find school with this name");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

schools.get("/byConference", (req, res) => {
  School.findAll({
    where: {
      conference: {
        [Op.substring]: req.query.conference
      }
    }
  })
    .then(school => {
      if (school) {
        res.json(school);
      } else {
        res.send("Conference does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = schools;
