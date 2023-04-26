const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let baseURL = `/api/houses`;

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller.js");

console.log(getHouses.toString());

app.get(baseURL, getHouses);
app.post(baseURL, createHouse);
app.delete(`${baseURL}/:id`, deleteHouse);
app.put(`${baseURL}/:id`, updateHouse);

app.listen(4004, () => console.log("We are up on 4004"));
