var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const rutasProtegidas = require("../middleware/rutasProtegidas")

router.post("/", (req, res) => {
  console.log("body", req.body);
  if (req.body.usuario === "felipe" && req.body.pass === "1234") {
    // con process.env.llaveOculta, en el path /.env deje la llave secreta para encriptar y desencriptar el token, lo puedes revisar en https://jwt.io/ , recuerda siempre pasar informacion dentro del token, pero jamas un dato sencible como una clave
    // exemplo al desencriptar el token
    // {
    // "check": true,
    // "usuario": "felipe",
    // "iat": 1654884265,
    // "exp": 1654885705
    // }
    const payload = {
      check: true,
      usuario: req.body.usuario,
    };
    const token = jwt.sign(payload, process.env.llaveOculta, {
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


// ejemplo de proteccion de reuta con middleware usando jwt
router.get('/authData', rutasProtegidas, (req, res) => {
 const datos = [
  { id: 1, nombre: "Asfo" },
  { id: 2, nombre: "Denisse" },
  { id: 3, nombre: "Carlos" }
 ];

 res.json(datos);
});

module.exports = router;
