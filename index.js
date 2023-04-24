const express = require("express");
const db = require("./db");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const server = express();
server.use(express.json());
server.use(cors());

server.post("/", async (req, res) => {
  const query = req.body;
  const dbs = await db.find(query);
  // console.log(dbs);
  res.json(dbs);
});


server.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
