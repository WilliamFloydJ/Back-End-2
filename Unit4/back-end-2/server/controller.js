const db = require("./db.json");
let houseNum = db.length;
module.exports = {
  getHouses: (req, res) => res.status(200).send(db),
  deleteHouses: (req, res) => {
    const dltIndex = db.findIndex((Ele) => Ele.id === req.params.id);
    db.splice(dltIndex, 1);
    res.status(200).send(db);
  },
  createHouses: (req, res) => {
    let { address, price, imageURL } = req.body;
    let House = { id: houseNum, address, price, imageURL };
    db.push(House);
    res.status(200).send(db);
  },
  updateHouses: (req, res) => {
    let { type } = req.data;
    const UptIndex = db.findIndex((Ele) => Ele.id === req.params.id);
    if (db[UptIndex].price <= 10000 && type === "minus") {
      db[UptIndex].price = 0;
      res.status(200).send(db);
    } else if (type === "minus") {
      db[UptIndex].price -= 10000;
      res.status(200).send(db);
    } else if (type === "plus") {
      db[UptIndex].price += 10000;
      res.status(200).send(db);
    } else {
      res.status(400);
    }
  },
};
