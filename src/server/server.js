const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//const Schools = require("./routes/Schools");
//app.use(require("./routes"));

//const Users = require("./routes/Users");
const Schools = require("./routes/Schools");

//endpoint for login = /api/users/login
//app.use("/api/users", Users);
app.use("/api/schools", Schools);

app.use((req, res) => {
  res.status(404).send("Unknown Request");
});

const port = 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
