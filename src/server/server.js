const express = require("express");

const app = express();

app.get("/api/schools", (req, res) => {
  const schools = [
    { id: 1, name: "SJSU", conference: "MWest" },
    { id: 2, name: "Stanford", conference: "Pac-10" },
    { id: 3, name: "Texas", conference: "Big-12" }
  ];
  res.json(schools);
});

const port = 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
