//Enrutador del
const express = require('express');
var router = express.Router();

router.get("/", (req,res)=>{
  res.send("Respondiendo con un recurso.")
})

//esta ruta permite que sea dinámico el nombre de usuario
//permitiendo el enrutamiento variable
router.get("/:user", (req,res)=>{
  var user = req.params.user;
  res.send("Consultando usuario: "+user)
})

module.exports = router;
