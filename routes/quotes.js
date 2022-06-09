var express = require("express");
var router = express.Router();
var quotes = require("../services/quotes");

router.get("/", async function (req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (error) {
    console.log("Error mientras se realizaba la consulta", error.message);
    next(error);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await quotes.create(req.body));
  } catch (error) {
    console.log("Error mientras se realizaba el insert", error.message);
    next(error);
  }
});

module.exports = router;
