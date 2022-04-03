const Port = 4004;

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const {
  getHouses,
  deleteHouses,
  updateHouses,
  createHouses,
} = require("./controller");
app.get("/api/houses", getHouses);
app.delete("/api/houses/:Name", deleteHouses);
app.put("/api/houses/:Name", updateHouses);
app.post("/api/houses", createHouses);

app.listen(Port, console.log(`Server is running on port ${Port}`));
