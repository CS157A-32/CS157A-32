const express = require("express");
const app = express();

app.use(require("./routes"));

app.use((req, res) => {
  res.status(404).send("Unknown Request");
});

const port = 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


