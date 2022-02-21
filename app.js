const express = require("express");

const connectDB = require("./config/db");
const router = require("./routes/index");
const cors = require('cors');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Hospital App");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
