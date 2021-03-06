const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../db/database");

users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password
    //privilege: req.body.privilege,
    //created: today
  };
  console.log(userData);
  pool.query(
    `SELECT username FROM admin WHERE username = "${req.body.username}"`,
    (err, result) => {
      if (err) throw err;
      if (result[0]) {
        res.json({ error: "User already exists" });
      } else {
        hash = bcrypt.hashSync(req.body.password, 10);
        userData.password = hash;
        pool.query(
          `INSERT into admin (username, password) VALUES
          ("${userData.username}", "${userData.password}")`,
          (err, result) => {
            if (err) throw err;
            res.send(result);
          }
        );
      }
    }
  );

  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  //   .then(user => {
  //     if (!user) {
  //       bcrypt.hash(req.body.password, 10, (err, hash) => {
  //         userData.password = hash;
  //         User.create(userData)
  //           .then(user => {
  //             let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
  //               expiresIn: 1200
  //             });
  //             res.json({ token: token, status: user.username + "Registered!" });
  //           })
  //           .catch(err => {
  //             res.send("error: " + err);
  //           });
  //       });
  //     } else {
  //       res.json({ error: "User already exists" });
  //     }
  //   })
  //   .catch(err => {
  //     res.send("error: " + err);
  //   });
});

users.post("/login", (req, res) => {
  console.log(req.body);
  pool.query(
    `SELECT * FROM admin WHERE username = "${req.body.username}"`,
    (err, result) => {
      if (err) throw err;
      if (!result[0]) {
        res.json({ error: "Incorrect username or password" });
      } else {
        if (bcrypt.compareSync(req.body.password, result[0].password)) {
          const token = jwt.sign(
            { user: result[0].username },
            process.env.SECRET_KEY,
            {
              expiresIn: 1440
            }
          );
          console.log("login success " + token);
          res.send(token);
        } else {
          res.json({ error: "Incorrect username or password" });
        }
      }
    }
  );
  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  //   .then(user => {
  //     if (user) {
  //       if (bcrypt.compareSync(req.body.password, user.password)) {
  //         let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
  //           expiresIn: 1440
  //         });
  //         res.send(token);
  //       } else {
  //         res.send("incorrect password");
  //       }
  //     } else {
  //       res.status(400).json({ error: "User does not exist" });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(400).json({ error: err });
  //   });
});

// users.get("/profile", (req, res) => {
//   var decoded = jwt.verify(
//     req.headers["authorization"],
//     process.env.SECRET_KEY
//   );

//   User.findOne({
//     where: {
//       id: decoded.username
//     }
//   })
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.send("User does not exist");
//       }
//     })
//     .catch(err => {
//       res.send("error: " + err);
//     });
// });

module.exports = users;
