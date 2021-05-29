const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));
// Enabled CORS. Now anyone can access these route= require(any other domain
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
