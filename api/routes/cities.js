var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send([
    {
      id: "1",
      level: getRandomInt(1, 4),
      name: "Madrid",
    },
    {
      id: "2",
      level: getRandomInt(1, 4),
      name: "Lisboa",
    },
  ]);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
