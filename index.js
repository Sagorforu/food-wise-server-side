const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("food wise server running");
});

app.listen(port, () => {
  console.log(`food wise server running on port:${port}`);
});
