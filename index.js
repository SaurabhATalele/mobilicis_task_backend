const express = require("express");
const db = require("./db");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const server = express();
server.use(cors());
server.use(express.json());

server.post("/", async (req, res) => {
  const query = req.body;
  const dbs = await db.find(query);
  // console.log(dbs);
  res.json(dbs);
});

server.post("/aggr", async (req, res) => {
    const query = req.body.pipeline;
    const dbs = await db.aggregate(query);
    // console.log(dbs);
    res.json(dbs);
  });


server.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
