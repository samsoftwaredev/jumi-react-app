var express = require("express");
var path = require("path");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));

const PORT = process.env.PORT || 3001;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
