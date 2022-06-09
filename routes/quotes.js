var express = require("express");
var router = express.Router();
var quotes = require("../controllers/quotes");

// usage: http://localhost:3000/quotes?page=2
router.get("/", async function (req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (error) {
    console.log("Error mientras se realizaba la consulta", error.message);
    next(error);
  }
});
// usage: http://localhost:3000/quotes/buscar?q=computer
router.get("/buscar", async function (req, res, next) {
  try {
    res.json(await quotes.getBusqueda(req.query.q));
  } catch (error) {
    console.log("Error mientras se realizaba la busqueda", error.message);
    next(error);
  }
});

// usage: http://localhost:3000/quotes/id/3
router.get("/id/:id", async function (req, res, next) {
  // res.json({ mensaje: '¡Hola' + req.params.id })
  try {
    res.json(await quotes.getQuote(req.params.id));
  } catch (error) {
    console.log("Error mientras se realizaba la busqueda", error.message);
    next(error);
  }
});
// usage: http://localhost:3000/quotes/2
router.get("/:page", async function (req, res, next) {
  // res.json({ mensaje: '¡Hola' + req.params.page })
  try {
    res.json(await quotes.getMultiple(req.params.page));
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
