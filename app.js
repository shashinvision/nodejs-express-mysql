var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var quotesRouter = require("./routes/quotes");

var app = express();

app.use(logger("dev"));
app.use(express.json());

// Parámetros por post
// Parámetros mediante POST y application/x-www-form-urlencoded:
// Necesitaremos body-parser: extrae los datos del body y los convierte en json
// npm i -S body-parser

// Ejemplo con body parser dentro de los archivos del router
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// router.post('/',function(req,res) {
//   res.json({mensaje: req.body.nombre})
// })

// Parámetros mediante POST y multipart/form-data
// Usaremos https://www.npmjs.com/package/busboy o Multer

// Como los datos entregados son por get params o query string de la url y json formateados para post usaremos solamente urlencoded: false
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/quotes", quotesRouter);


// validacion de errores va antes del export del modulo
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = app;
