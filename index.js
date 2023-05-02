const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const chefData = require('./Data/chefData.json')

app.use(cors())

app.get("/", (req, res) => {
  res.send("food wise server running");
});

app.get('/chefdata', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
  console.log(`food wise server running on port:${port}`);
});
