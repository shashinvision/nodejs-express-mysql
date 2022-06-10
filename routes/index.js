var express = require("express");
var router = express.Router();
var quotes = require("./quotes");
var auth = require("./auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({ message: "Estás conectado a nuestra API" });
});

router.use("/quotes", quotes);
router.use("/auth", auth);

module.exports = router;
