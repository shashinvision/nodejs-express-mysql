var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../configs/config");
const app = express()

app.set('llave', config.llave);


router.post("/", (req, res) => {
  console.log("body", req.body);
  if (req.body.usuario === "felipe" && req.body.pass === "1234") {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, app.get("llave"), {
      expiresIn: 1440,
    });
    res.json({
      mensaje: "Autenticación correcta",
      token: token,
    });
  } else {
    res.json({ mensaje: "Usuario o contraseña incorrectos" });
  }
});

module.exports = router;
