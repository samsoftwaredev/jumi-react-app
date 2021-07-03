const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "123123",
  port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));
// Enabled CORS. Now anyone can access these route= require(any other domain
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/api/users", (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

app.get("/api", (req, res) => {
  res.json("It's ALIVE!");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
